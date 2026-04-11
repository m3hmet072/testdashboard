const l=[{label:"Menu",href:"./werkbon.html",icon:"🏠"},{label:"Nieuw",href:"./werkbon-artikelen-nieuw.html",icon:"📁"},{label:"Zoek",href:"./werkbon-artikelen-zoek.html",icon:"🔎"},{label:"Vind",href:"./werkbon-artikelen-vind.html",icon:"🧭"},{label:"Vind alles",href:"./werkbon-artikelen-vind-alles.html",icon:"🌐"},{label:"Lijst",href:"./werkbon-artikelen-lijst.html",icon:"📋"},{label:"Print",href:"./werkbon-artikelen-print.html",icon:"🖨️"},{label:"Import",href:"./werkbon-artikelen-import.html",icon:"📥"},{label:"Inboeken",href:"./werkbon-artikelen-inboeken.html",icon:"📘"},{label:"Waarde",href:"./werkbon-artikelen-waarde.html",icon:"💶"},{label:"Verwijder",href:"./werkbon-artikelen-verwijder.html",icon:"🗑️"},{label:"Eerste",href:"./werkbon-artikelen-eerste.html",icon:"⏮️"},{label:"Vorige",href:"./werkbon-artikelen-vorige.html",icon:"◀️"},{label:"Volgende",href:"./werkbon-artikelen-volgende.html",icon:"▶️"},{label:"Laatste",href:"./werkbon-artikelen-laatste.html",icon:"⏭️"}];function n(){return`
    <div class="werkbon-legacy-toolbar" role="toolbar" aria-label="Artikelen acties">
      ${l.map(e=>`
        <a class="werkbon-legacy-toolbtn" href="${e.href}">
          <span class="werkbon-legacy-toolbtn-icon" aria-hidden="true">${e.icon}</span>
          <span class="werkbon-legacy-toolbtn-label">${e.label}</span>
        </a>
      `).join("")}
    </div>
  `}export{n as r};
