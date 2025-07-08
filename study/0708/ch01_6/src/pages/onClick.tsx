const rootDiv = document.getElementById("root");
if(rootDiv) {
  rootDiv.onclick = (e: Event) => {
    const {isTrusted, target, bubbles} = e;
    console.log('mouse click occurs on rootDiv', isTrusted, target, bubbles);
  };

  rootDiv.onclick = (e: Event) => {
    const {isTrusted, target, bubbles} = e;
    console.log('mouse click occurs on rootDiv again', isTrusted, target, bubbles)
  }
}

export default function OnClick() {
  return <div>OnClick</div>
}