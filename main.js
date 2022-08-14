const tabs = document.querySelector(".tabs");
const tabButtons = tabs.querySelectorAll('[role="tab"]');
const tabPanels = Array.from(tabs.querySelectorAll('[role="tabpanel"]'));

function handleTabClick(event) {
  //Hide all tab panels
  tabPanels.forEach((panel) => {
    panel.hidden = true;
  });

  //Mark all tabs as unselected
  tabButtons.forEach((tab) => {
    tab.setAttribute("aria-selected", false);
  });

  //Mark the clicked tab as selected
  event.currentTarget.setAttribute("aria-selected", true);

  //Find the associated tabPanel and show it
  const { id } = event.currentTarget;
  console.log({ id });

  //Find in the array of tabPanels
  console.log(tabPanels);
  const tabPanel = tabPanels.find(
    (panel) => panel.getAttribute("aria-labelledby") === id
  );
  tabPanel.hidden = false;
}

tabButtons.forEach((button) =>
  button.addEventListener("click", handleTabClick)
);
