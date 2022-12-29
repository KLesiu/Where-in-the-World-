const createInfoElement = (labelName, value) => {
  const infoElement = document.createElement("div");
  const labelElement = document.createElement("strong");
  labelElement.innerText = `${labelName}: `;
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
  imgElement.alt = `${country.name} flag`;

  imgContainer.appendChild(imgElement);
  return imgContainer;
};
const createCountryItemElement = (country) => {
  const countryElement = document.createElement("li");
  const anchorElement = document.createElement("a");
  anchorElement.href = `?country=${country.code}`;

  const countryName = document.createElement("strong");
  countryName.innerText = country.name;
  countryName.classList.add("country-name");
  anchorElement.appendChild(createFlagImageElement(country));
  const infoContainerEl = document.createElement("div");
  infoContainerEl.classList.add("info-container");
  infoContainerEl.appendChild(countryName);
  infoContainerEl.appendChild(
    createInfoElement("Population", country.population)
  );
  infoContainerEl.appendChild(createInfoElement("Capital", country.capital));
  infoContainerEl.appendChild(createInfoElement("Region", country.region));
  anchorElement.appendChild(infoContainerEl);
  countryElement.appendChild(anchorElement);
  return countryElement;
};

const createListElement = (countries) => {
  const listEl = document.createElement("ul");
  countries.forEach((country) => {
    listEl.appendChild(createCountryItemElement(country));
  });
  return listEl;
};
const createDetailElement = (country) => {
  const detailContainerElement = document.createElement("div");
  const flagImgElement = createFlagImageElement(country);
  const detailContentElement = document.createElement("div");

  detailContainerElement.classList.add("detail-container");
  detailContentElement.classList.add("detail-content");

  const detailNameElement = document.createElement("strong");
  detailNameElement.innerText = country.name;
  detailNameElement.classList.add("detail-name");

  detailContainerElement.appendChild(flagImgElement);
  detailContentElement.appendChild(detailNameElement);

  const leftColumnElement = document.createElement("div");

  leftColumnElement.appendChild(
    createInfoElement("Native name", country.nativeName)
  );
  leftColumnElement.appendChild(
    createInfoElement("Population", country.population)
  );
  leftColumnElement.appendChild(createInfoElement("Region", country.region));
  leftColumnElement.appendChild(
    createInfoElement("Sub region", country.subregion)
  );
  leftColumnElement.appendChild(createInfoElement("Capital", country.capital));

  const rightColumnElement = document.createElement("div");

  rightColumnElement.appendChild(
    createInfoElement("Top level domain", country.tld)
  );
  rightColumnElement.appendChild(
    createInfoElement("Currencies", country.currencies)
  );
  rightColumnElement.appendChild(
    createInfoElement("Languages", country.languages)
  );

  detailContentElement.appendChild(leftColumnElement);
  detailContentElement.appendChild(rightColumnElement);

  if (country.borders && country.borders.length > 0) {
    detailContentElement.appendChild(createBorderCountriesContainer(country));
  }

  detailContainerElement.appendChild(detailContentElement);

  return detailContainerElement;
};
const createDetailButton = (text, link) => {
  const anchor = document.createElement("a");
  anchor.innerText = text;
  anchor.classList.add("detail-back");
  anchor.href = link;
  return anchor;
};

const createBorderCountriesContainer = (country) => {
  const borderCountriesContainerElement = document.createElement("div");
  borderCountriesContainerElement.classList.add("border-countries-container");
  const labelElement = document.createElement("strong");
  labelElement.innerText = "Border Countries";
  borderCountriesContainerElement.appendChild(labelElement);
  country.borders.forEach((border) => {
    borderCountriesContainerElement.appendChild(
      createDetailButton(border, `index.html/?country=${border}`)
    );
  });
  return borderCountriesContainerElement;
};
export const renderCountriesList = (countries) => {
  const rootElement = document.querySelector("#root");
  rootElement.innerHTML = "";
  rootElement.appendChild(createListElement(countries));
};
export const renderCountryDetails = (country) => {
  const rootElement = document.querySelector("#root");
  rootElement.innerHTML = "";
  rootElement.appendChild(createDetailButton("Go back", "index.html"));
  rootElement.appendChild(createDetailElement(country));
};
