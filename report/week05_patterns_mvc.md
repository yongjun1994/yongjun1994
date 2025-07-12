# ✅ 아키텍처 패턴 비교: MVC vs MVP vs MVVM

---

## ✅ 1. MVC (Model - View - Controller)

![img](https://velog.velcdn.com/images/blucky8649/post/f98e5e96-69fb-4100-83b1-a058fb28b792/image.png)

### ▶ 개요
Model-View-Controller(MVC) 패턴은 가장 기본적인 UI 아키텍처 설계 방식으로, 각 구성 요소의 책임을 분리하여 코드의 응집도를 높이고 결합도를 낮추기 위한 목적에서 제안되었습니다. UIKit 환경에서는 구현이 간단하다는 장점으로 인해 전통적으로 널리 활용됩니다.

### ▶ 구성 요소 역할
- **Model**: 애플리케이션의 핵심 데이터 구조와 비즈니스 로직을 정의. UI와 완전히 분리되어야 하며, 네트워크 통신 및 데이터 가공 등을 담당함.
- **View**: 사용자 인터페이스 요소 (UILabel, UIButton 등)를 구성하며, 직접적인 로직은 포함하지 않음. 사용자 입력은 Controller를 통해 처리됨.
- **Controller**: 사용자 입력을 처리하고 Model을 갱신한 뒤 View를 업데이트하는 중재자 역할을 수행.

### ▶ 흐름
사용자 입력 → Controller → Model 변경 → Controller → View 업데이트

### ▶ UIKit 예제 코드
```swift
struct Task {
    var title: String
    var completed: Bool
}

class TaskViewController: UIViewController {
    var task: Task?
    @IBOutlet weak var titleLabel: UILabel!
    @IBOutlet weak var checkBox: UIButton!

    override func viewDidLoad() {
        super.viewDidLoad()
        updateUI()
    }

    func updateUI() {
        titleLabel.text = task?.title
        checkBox.isSelected = task?.completed ?? false
    }
}
```

### ▶ 평가
- ✅ 장점: 구조가 단순하여 초기 개발에 적합
- ❌ 단점: View와 Model 사이의 결합도가 높아지기 쉬우며, 확장성과 테스트 용이성이 낮음

---

## ✅ 2. MVP (Model - View - Presenter)

![img](https://velog.velcdn.com/images/blucky8649/post/bbee84f1-9ac8-4941-9b53-21089ec4f2a2/image.png)

### ▶ 개요
MVP 패턴은 MVC에서 파생된 구조로, View와 Model의 결합도를 낮추기 위해 Presenter 계층을 도입하였습니다. 특히 테스트 주도 개발(Test-Driven Development, TDD)에 유리한 구조를 제공합니다.

### ▶ 구성 요소 역할
- **Model**: 데이터 구조 및 비즈니스 로직 담당 (MVC와 동일)
- **View**: UI 구성과 사용자 입력 처리 담당. Presenter 인터페이스를 통해 데이터 요청 및 UI 갱신 수행
- **Presenter**: View의 요청을 받아 Model을 조작하고, 처리된 데이터를 View에 전달함. UIKit과의 결합이 없도록 구현됨.

### ▶ 흐름
사용자 입력 → View → Presenter → Model → Presenter → View

### ▶ UIKit 예제 코드
```swift
struct Task {
    var title: String
    var description: String
}

protocol TaskPresenterProtocol {
    func fetchTask() -> Task
    func taskCompleted()
}

class TaskPresenter: TaskPresenterProtocol {
    private var task: Task
    init(task: Task) {
        self.task = task
    }
    func fetchTask() -> Task { task }
    func taskCompleted() { /* 처리 로직 */ }
}

class TaskViewController: UIViewController {
    @IBOutlet private var titleLabel: UILabel!
    @IBOutlet private var descriptionLabel: UILabel!
    private var presenter: TaskPresenterProtocol!

    convenience init(presenter: TaskPresenterProtocol) {
        self.init()
        self.presenter = presenter
    }

    override func viewDidLoad() {
        super.viewDidLoad()
        let task = presenter.fetchTask()
        titleLabel.text = task.title
        descriptionLabel.text = task.description
    }

    @IBAction private func completeButtonTapped() {
        presenter.taskCompleted()
    }
}
```

### ▶ 평가
- ✅ 장점: View와 Logic 계층 간 완전한 분리, 테스트 및 유지보수에 유리함
- ❌ 단점: Presenter의 수 증가에 따른 클래스 관리 부담

---

## ✅ 3. MVVM (Model - View - ViewModel)

![img](https://velog.velcdn.com/images/blucky8649/post/6c76608c-abcf-4378-b29b-8ec97f6792e7/image.png)

### ▶ 개요
MVVM은 특히 SwiftUI 및 Combine/RxSwift 환경에서 강력한 바인딩 기능을 활용하여 UI와 로직 계층 간 완전한 분리를 지향하는 패턴입니다. ViewModel은 Presentation Logic을 담당하며, View는 그 상태를 단순히 반영합니다.

### ▶ 구성 요소 역할
- **Model**: 데이터와 비즈니스 로직 (MVP와 동일)
- **View**: UI 요소로서 ViewModel의 상태를 바인딩하여 반영함. 비즈니스 로직을 포함하지 않음
- **ViewModel**: Model과 상호작용하며 View에 필요한 데이터 형식으로 가공. ViewModel은 View를 참조하지 않음

### ▶ 흐름
사용자 입력 → View → ViewModel → Model → ViewModel 상태 변경 → View 갱신

### ▶ UIKit 예제 코드
```swift
struct Task {
    var title: String
    var completed: Bool
}

class TaskListViewModel {
    private var tasks: [Task] = [
        Task(title: "Buy groceries", completed: false),
        Task(title: "Read a book", completed: true)
    ]
    var taskCount: Int { tasks.count }
    func task(at index: Int) -> Task { tasks[index] }
    func addTask(title: String) {
        tasks.append(Task(title: title, completed: false))
    }
    func toggleTask(at index: Int) {
        tasks[index].completed.toggle()
    }
}

class TaskListViewController: UIViewController {
    @IBOutlet private var tableView: UITableView!
    @IBOutlet private var taskTextField: UITextField!
    private var viewModel = TaskListViewModel()

    override func viewDidLoad() {
        super.viewDidLoad()
        tableView.dataSource = self
    }

    @IBAction private func addButtonTapped() {
        guard let title = taskTextField.text, !title.isEmpty else { return }
        viewModel.addTask(title: title)
        tableView.reloadData()
        taskTextField.text = ""
    }
}

extension TaskListViewController: UITableViewDataSource {
    func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        viewModel.taskCount
    }

    func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        let cell = tableView.dequeueReusableCell(withIdentifier: "TaskCell", for: indexPath)
        let task = viewModel.task(at: indexPath.row)
        cell.textLabel?.text = task.title
        cell.accessoryType = task.completed ? .checkmark : .none
        return cell
    }
}
```

### ▶ 평가
- ✅ 장점: View와 로직 계층의 완전한 분리, 테스트 용이, SwiftUI 및 Reactive 환경에서 강력함
- ❌ 단점: ViewModel 설계 복잡도 증가, 초기 진입 장벽 높음

---

## 📌 아키텍처 비교 요약표

| 패턴  | 사용자 입력 | View → Logic 의존성 | Logic → View 의존성 | View ↔ Model 직접 연관 | View ↔ Logic 관계 | 테스트 용이성 |
|--------|--------------|------------------------|-------------------------|--------------------------|---------------------|-----------------|
| MVC    | Controller   | ❌ 없음               | ❌ 없음               | ⭕ 있음                 | 1 : n               | 낮음            |
| MVP    | View         | ⭕ 있음               | ⭕ 있음               | ❌ 없음                 | 1 : 1               | 높음            |
| MVVM   | View         | ⭕ 있음               | ❌ 없음               | ❌ 없음                 | n : 1               | 매우 높음       |

---

## 🧠 정리 메모

- **MVC**: 학습 난이도가 낮지만, 애플리케이션이 복잡해질수록 유연성 부족
- **MVP**: 테스트 가능성과 유지보수를 개선하지만, Presenter 관리가 복잡해질 수 있음
- **MVVM**: 바인딩 기반의 구조로, 반응형 프로그래밍에 이상적이며 유지보수 및 확장성이 탁월함
