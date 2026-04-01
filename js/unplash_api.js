const searchField = document.getElementById('search-field')
let currentPage = 1;
let currentQuery = '';

const searchPhone = (page = 1) => {
    const searchText = searchField.value.trim();

    if (searchText === '') {
        alert('Please search any image');
        return;
    }

    currentPage = page;
    currentQuery = searchText;

    const access_key = 'EAnrClTuC2toobMDm3srVnawmoHGPvJGA2gd7cTXwN4'
    const secret_key = 'MXR3V3M3GXmcsRKOlgZkL_4FjfhY5Q8Q0E8bWGIM4qw'

    const url = `https://api.unsplash.com/search/photos?client_id=${access_key}&query=${searchText}&page=${page}&per_page=12`;

    fetch(url)
        .then(res => res.json())
        .then(data => {
            displayResult(data.results);
            updatePagination(data.total_pages);
            document.getElementById('pagination').style.display = 'flex';
        });
};

const displayResult = images => {
    const resultRow = document.getElementById('search-result')
    resultRow.textContent = '';
    // console.log(images[0]);

    images.forEach(image => {
        // console.log(images.length);
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = ` <div class="card border-0 shadow">
                            <img src="${image?.urls?.thumb}" class="w-50 mx-auto my-4" alt="${image?.alt_description}" width="200" height="200" style="height:200px; object-fit:cover; loading="lazy">
                            <div class="card-body text-center w-75 mx-auto">
                            <p style="text-overflow: ellipsis; overflow: hidden; white-space: nowrap;">${image?.alt_description}</p>
                                <h5 class="card-title" style="text-overflow: ellipsis; overflow: hidden; white-space: nowrap;>Author Name: ${image?.user?.name}</h5>
                                <a class="btn btn-primary text-white my-3" type="button" id="btn-details" href=${image?.links?.html} target="_blank">More details</a>
                            </div>
                         </div>`;
        resultRow.appendChild(div);
        document.getElementById('signal-product').style.display = 'none';
    });
};

// pagination 
const updatePagination = (totalPages) => {
    const pageNumber = document.getElementById('pageNumber');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    pageNumber.textContent = `Page ${currentPage}`;

    // Disable buttons
    prevBtn.disabled = currentPage === 1;
    nextBtn.disabled = currentPage === totalPages;

    prevBtn.onclick = () => {
        if (currentPage > 1) {
            searchPhone(currentPage - 1);
            window.scrollTo(0, 0);
        }
    };

    nextBtn.onclick = () => {
        if (currentPage < totalPages) {
            searchPhone(currentPage + 1);
            window.scrollTo(0, 0);
        }
    };
};

searchField.addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        searchPhone();
    }
});