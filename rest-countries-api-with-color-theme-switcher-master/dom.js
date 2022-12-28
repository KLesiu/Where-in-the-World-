const createInfoElement = (labelName, value) => {
  const infoElement = document.createElement("div");
  const labelElement = document.createElement("strong");
  labelElement.innerText = `${labelName}:`;
  const valueElement = document.createElement("span");
  valueElement.innerText = value;
  infoElement.appendChild(labelElement);
  infoElement.appendChild(valueElement);
  return infoElement;
};
const createFlagImageElement = (country) => {
  const imgContainer = document.createElement("div");
  const imgElement = document.createElement("img");
  imgElement.src = country.flagUrl;
  imgElement.width = 160;
  imgElement.height = 98;
  imgContainer.appendChild(imgElement);
  return imgContainer;
};
const createCountryItemElement = (country) => {
  const countryElement = document.createElement("li");

  const countryName = document.createElement("strong");
  countryName.innerText = country.name;
  countryElement.appendChild(createFlagImageElement(country));
  const infoContainerEl = document.createElement("div");
  infoContainerEl.classList.add("info-container");
  infoContainerEl.appendChild(countryName);
  infoContainerEl.appendChild(
    createInfoElement("Population", country.population)
  );
  infoContainerEl.appendChild(createInfoElement("Capital", country.capital));
  infoContainerEl.appendChild(createInfoElement("Region", country.region));
  countryElement.appendChild(infoContainerEl);
  return countryElement;
};

const createListElement = (countries) => {
  const listEl = document.createElement("ul");
  countries.forEach((country) => {
    listEl.appendChild(createCountryItemElement(country));
  });
  return listEl;
};

export const renderCountriesList = (countries) => {
  const rootElement = document.querySelector("#root");
  rootElement.appendChild(createListElement(countries));
};
