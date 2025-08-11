# CORS 정책과 웹 보안 기본 개념

## 1. 웹 보안의 시작: 동일 출처 정책 (Same-Origin Policy, SOP)

웹 보안의 가장 기본적인 원칙 중 하나는 **동일 출처 정책 (Same-Origin Policy, SOP)**입니다. 이 정책은 한 출처(Origin)에서 로드된 문서나 스크립트가 다른 출처의 리소스와 상호작용하는 것을 제한하는 브라우저의 보안 메커니즘입니다. 악의적인 웹사이트가 사용자의 다른 웹사이트 세션에서 정보를 탈취하는 것을 방지하기 위해 만들어졌습니다.

### 출처(Origin)란?

**출처(Origin)**는 다음 세 가지 요소의 조합으로 정의됩니다.

* **프로토콜 (Scheme):** `http`, `https://` 등
* **호스트 (Host):** `google.com`, `example.com` 등
* **포트 (Port):** `80`, `443`, `3000` 등

이 세 가지가 모두 같아야 **동일 출처**로 인정됩니다. 예를 들어, `http://example.com:80` 과 `https://example.com:80`은 프로토콜이 다르기 때문에 다른 출처로 간주됩니다.

| URL                               | 다른 URL                        | 동일 출처 여부 | 이유                               |
| --------------------------------- | ------------------------------- | -------------- | ---------------------------------- |
| `http://example.com/app/index.html` | `http://example.com/app2/main.html` | O              | 프로토콜, 호스트, 포트(기본값 80) 동일 |
| `http://example.com`              | `https://example.com`           | X              | 프로토콜 불일치                    |
| `http://example.com`              | `http://www.example.com`        | X              | 호스트 불일치                      |
| `http://example.com`              | `http://example.com:8080`       | X              | 포트 불일치                        |



---

## 2. 교차 출처 리소스 공유 (Cross-Origin Resource Sharing, CORS)

SOP는 보안에 필수적이지만, 현대 웹 애플리케이션에서는 다른 출처의 리소스(예: API, 폰트, 이미지)를 합법적으로 요청해야 하는 경우가 많습니다. 이러한 필요성에 따라 등장한 것이 **교차 출처 리소스 공유(CORS)**입니다.

CORS는 서버가 특정 출처의 웹 페이지에 자신의 리소스를 불러갈 수 있도록 허용하는 **HTTP 헤더 기반 메커니즘**입니다. 즉, SOP라는 엄격한 규칙에 대한 예외를 허용하는 정책입니다. 브라우저는 서버가 보낸 CORS 관련 HTTP 헤더를 확인하여, 해당 교차 출처 요청이 안전한지 판단하고 리소스 접근을 허용하거나 차단합니다.

**핵심:** CORS 정책은 **서버**에서 설정하지만, 정책의 시행 주체는 **브라우저**입니다.

---

## 3. CORS의 작동 방식: HTTP 헤더 (Headers)

CORS는 특정 HTTP 헤더를 통해 작동합니다. 이 헤더들은 클라이언트(브라우저)의 요청과 서버의 응답에 포함되어 교차 출처 통신의 허용 여부를 결정합니다.

### 요청 헤더 (Request Headers)

브라우저가 다른 출처로 리소스를 요청할 때, 다음과 같은 헤더를 자동으로 추가합니다.

* `Origin`: 요청을 시작한 출처를 나타냅니다.
    * 예: `Origin: https://my-awesome-app.com`

### 응답 헤더 (Response Headers)

서버는 브라우저의 요청에 대한 응답으로 다음과 같은 헤더를 포함하여 CORS 정책을 전달합니다.

* `Access-Control-Allow-Origin`: 리소스에 접근할 수 있도록 허용된 출처를 명시합니다.
    * 예: `Access-Control-Allow-Origin: https://my-awesome-app.com`
    * `*` 와일드카드를 사용하면 모든 출처의 접근을 허용하지만, 보안상 권장되지 않습니다.
* `Access-Control-Allow-Methods`: 허용되는 HTTP 메서드를 지정합니다.
    * 예: `Access-Control-Allow-Methods: GET, POST, PUT, DELETE`
* `Access-Control-Allow-Headers`: 요청에 사용될 수 있는 커스텀 헤더를 지정합니다.
    * 예: `Access-Control-Allow-Headers: Content-Type, Authorization`
* `Access-Control-Allow-Credentials`: 자격 증명(쿠키, 인증 헤더 등)을 포함한 요청을 허용할지 여부를 나타냅니다. 이 값이 `true`일 경우, `Access-Control-Allow-Origin` 헤더에 `*`를 사용할 수 없습니다.

---

## 4. 프리플라이트 요청 (Preflight Request)

모든 교차 출처 요청이 즉시 실행되는 것은 아닙니다. 브라우저는 실제 요청을 보내기 전에 **프리플라이트 요청(Preflight Request)**이라는 예비 요청을 먼저 보내 서버가 해당 요청을 수락할지 확인하는 경우가 있습니다. 이는 서버에 영향을 줄 수 있는 "복잡한" 요청 (예: `DELETE`, `PUT` 메서드 또는 특정 `Content-Type`을 사용하는 요청)에 대해 수행됩니다.

프리플라이트 요청은 `OPTIONS` HTTP 메서드를 사용하며, 실제 요청에 사용될 메서드와 헤더 정보를 서버에 미리 알립니다.

### 프리플라이트 요청의 흐름

1.  **브라우저의 예비 요청 (OPTIONS):**
    * 브라우저는 실제 요청을 보내기 전에 `OPTIONS` 메서드로 프리플라이트 요청을 보냅니다.
    * 이 요청에는 `Access-Control-Request-Method` (실제 요청의 메서드)와 `Access-Control-Request-Headers` (실제 요청에 포함될 헤더)가 포함됩니다.

    ```http
    OPTIONS /api/users/123 HTTP/1.1
    Host: api.example.com
    Origin: [https://my-awesome-app.com](https://my-awesome-app.com)
    Access-Control-Request-Method: DELETE
    Access-Control-Request-Headers: Authorization
    ```

2.  **서버의 응답:**
    * 서버는 프리플라이트 요청을 받고, 해당 교차 출처 요청을 허용할 것인지 CORS 관련 헤더를 통해 응답합니다.

    ```http
    HTTP/1.1 204 No Content
    Access-Control-Allow-Origin: [https://my-awesome-app.com](https://my-awesome-app.com)
    Access-Control-Allow-Methods: GET, POST, DELETE
    Access-Control-Allow-Headers: Authorization
    Access-Control-Max-Age: 86400
    ```

3.  **브라우저의 판단 및 실제 요청:**
    * 브라우저는 서버의 응답 헤더를 보고 실제 요청(`DELETE`)이 허용되는지 확인합니다.
    * 허용된다면, 브라우저는 이제 실제 `DELETE` 요청을 서버로 보냅니다.
    * 만약 서버가 허용하지 않는다는 응답을 보내면, 브라우저는 실제 요청을 보내지 않고 콘솔에 CORS 에러를 출력합니다.



이처럼 프리플라이트 요청은 실제 데이터 전송 전에 안전하게 통신 가능 여부를 확인하는 중요한 보안 절차입니다.

## 요약

* **SOP (동일 출처 정책):** 웹 보안의 기본. 다른 출처의 리소스 접근을 기본적으로 차단.
* **Origin (출처):** 프로토콜, 호스트, 포트의 조합.
* **CORS (교차 출처 리소스 공유):** SOP에 대한 예외를 설정하는 메커니즘. 서버가 HTTP 헤더를 통해 다른 출처의 접근을 허용.
* **Header (헤더):** CORS 정책을 전달하는 핵심 수단. `Access-Control-Allow-Origin` 등이 사용됨.
* **Preflight Request (프리플라이트 요청):** 실제 요청 전 `OPTIONS` 메서드로 보내는 예비 요청. 서버가 복잡한 교차 출처 요청을 수락할지 미리 확인하는 과정.
