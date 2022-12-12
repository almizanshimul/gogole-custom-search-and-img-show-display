const searchPhone = () => {
    const searchField = document.getElementById('search-field')
    const searchText = searchField.value;
    // searchField.value = '';
// https://www.googleapis.com/customsearch/v1?key=AIzaSyDWWP1v69NhkAZ2ux7ad32pMdS9nSFYqOU&cx=f359936bc6ee544f2&q=lectures
    
const google_api_key= 'AIzaSyDWWP1v69NhkAZ2ux7ad32pMdS9nSFYqOU'
const cx_api_key = 'f359936bc6ee544f2'

    if (searchText == '') {
        alert('Please enter a phone name')
    } else {
        // fetch data 
        const url = `https://www.googleapis.com/customsearch/v1?key=${process.env.GOOGLE_API_KEY}&cx=${process.env.CX_API_KEY}&searchType=image&q=${searchText}`;

        fetch(url)
            .then(res => res.json())
            .then(data => {
                displayResult(data.items)
                // console.log(data);
            })
    }

}

const displayResult = items => {
    const resultRow = document.getElementById('search-result')
    resultRow.textContent = '';
    // console.log(phones[0]);

    items.forEach(item => {
        // console.log(phones.length);
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = ` <div class="card border-0 shadow">
                            <img src="${item.image.thumbnailLink}" class="w-50 mx-auto my-4" alt="...">
                            <!-- <div class="card-body text-center">
                                <h6 class="card-title">${item}</h6>
                                <h5 class="card-title">User Name: ${item}</h5>
                                <button class="btn btn-primary text-white my-3" type="button" id="btn-details" onclick="loadMoreDetails('${item}')">More details</button>
                            </div> -->
                         </div>`;
        resultRow.appendChild(div);
        document.getElementById('signal-product').style.display = 'none';
    });
};

// const loadMoreDetails = details => {
//     const url = `https://openapi.programming-hero.com/api/phone/${details}`;
//     fetch(url)
//         .then(res => res.json())
//         .then(data => addDetails(data.data))
// }

// const addDetails = (product) => {
//     console.log(product);
//     const signalProduct = document.getElementById('signal-product');
//     signalProduct.style.display = 'block';
//     signalProduct.textContent = '';
//     const div = document.createElement('div');
//     div.classList.add('card', 'mx-auto', 'border-0', 'shadow')
//     div.innerHTML = `<div class="row g-4 my-4">
//                         <div class="col-4 text-center">
//                             <img src="${product.image}" class="w-75 mx-auto my-4 alt="...">
//                         </div>
//                         <div class="col-8 pos-rel">
//                         <!-- Product Details -->
//                             <h2 class="text-primary">Product Details:</h2>
//                             <h3 class="card-text">Name: ${product.name}</h3>
//                             <p class="card-text fs-6 mb-1 text-black-50"><span class="fw-bold">Release Date: </span>${product.releaseDate ? product.releaseDate : 'No release date found'}</p>
//                             <p class="card-text fs-6 mb-1 pos-ab">${product.brand}</p>
//                         <!-- Main features -->
//                             <h5 class="text-success my-2">Main features:</h5>
//                             <p class="card-text fs-6 mb-1"><span class="fw-bold">Storage: </span>${product.mainFeatures.storage}</p>
//                             <p class="card-text fs-6 mb-1"><span class="fw-bold">Display Size: </span>${product.mainFeatures.displaySize}</p>
//                             <p class="card-text fs-6 mb-1"><span class="fw-bold">Chip Set: </span>${product.mainFeatures.chipSet}</p>
//                             <p class="card-text fs-6 mb-1"><span class="fw-bold">Memory: </span>${product.mainFeatures.memory}</p>
//                             <p class="card-text fs-6 mb-1"><span class="fw-bold">Sensors: </span>${product.mainFeatures.sensors}</p>
//                         <!-- Other Details -->
//                             <h5 class="text-success my-2">Other Details:</h5>
//                             <p class="card-text fs-6 mb-1"><span class="fw-bold">WLAN: </span>${product.others.WLAN}</p>
//                             <p class="card-text fs-6 mb-1"><span class="fw-bold">Bluetooth: </span>${product.others.Bluetooth}</p>
//                             <p class="card-text fs-6 mb-1"><span class="fw-bold">GPS: </span>${product.others.GPS}</p>
//                             <p class="card-text fs-6 mb-1"><span class="fw-bold">NFC: </span>${product.others.NFC}</p>
//                             <p class="card-text fs-6 mb-1"><span class="fw-bold">Radio: </span>${product.others.Radio}</p>
//                             <p class="card-text fs-6 mb-1"><span class="fw-bold">USB: </span>${product.others.USB}</p>
//                         </div>
//     </div>`;
//     signalProduct.appendChild(div);
//     /* const sensors = product.mainFeatures.sensors
//     for (const sensor of sensors) {
//         const previousSensor = sensor;
//         const total = previousSensor + '|' + sensor;
//         console.log(total);
//         // console.log(`${previousSensor}, ${sensor}`)
//     } */
// }
