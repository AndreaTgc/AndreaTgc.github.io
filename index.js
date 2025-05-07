async function loadComponent(id, file) {
  try {
    const res = await fetch(file);
    if (!res.ok) throw new Error(`Failed to load ${file}`);
    const html = await res.text();
    document.getElementById(id).innerHTML = html;
  } catch (err) {
    console.error(err);
    document.getElementById(id).innerHTML = `<p>Error loading ${file}</p>`;
  }
}

loadComponent("header", "components/header.html");
loadComponent("main", "components/main.html");
loadComponent("footer", "components/footer.html");
