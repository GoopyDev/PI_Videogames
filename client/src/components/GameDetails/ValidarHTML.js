const { parse } = require("parse5");
const tagsPermitidos = ["h1", "h2", "p", "br", "ul", "ol", "li", "span"];

export default function validarHTML(html) {
  const fragment = parse(html);
  const HTML_Limpio = fragment.childNodes
    .map((nodo) => {
      if (nodo.nodeName === "#text") {
        return nodo.value;
      }
      if (tagsPermitidos.includes(nodo.nodeName)) {
        const attributos = nodo.attrs
          .map((attr) => `${attr.name}="${attr.value}"`)
          .join(" ");
        return `<${nodo.nodeName} ${attributos}>${validarHTML(
          nodo.childNodes
        )}</${nodo.nodeName}>`;
      }
      return "";
    })
    .join("");

  return HTML_Limpio;
}
