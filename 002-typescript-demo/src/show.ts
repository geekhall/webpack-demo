export function show(content: string) {
  window.document.getElementById('app')!.innerHTML = '<h1>Hello, ' + content + '</h1>';
}
