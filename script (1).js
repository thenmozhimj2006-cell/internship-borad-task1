const internships = [
    {
        title: "Frontend Web Developer Intern",
        company: "BrightWeb Solutions",
        domain: "Web Development",
        location: "Remote",
        duration: "2 Months"
    },
    {
        title: "Python Developer Intern",
        company: "CodeNest Labs",
        domain: "Python",
        location: "Chennai",
        duration: "3 Months"
    },
    {
        title: "Data Analytics Intern",
        company: "InsightWorks",
        domain: "Data Analytics",
        location: "Remote",
        duration: "2 Months"
    },
    {
        title: "UI/UX Design Intern",
        company: "CreativePixel Studio",
        domain: "UI/UX",
        location: "Bangalore",
        duration: "1 Month"
    },
    {
        title: "JavaScript Developer Intern",
        company: "TechBridge",
        domain: "Web Development",
        location: "Remote",
        duration: "3 Months"
    },
    {
        title: "Python Data Intern",
        company: "DataCraft",
        domain: "Python",
        location: "Hyderabad",
        duration: "2 Months"
    }
];

const searchForm = document.getElementById("searchForm");
const searchInput = document.getElementById("searchInput");
const domainFilter = document.getElementById("domainFilter");
const internshipList = document.getElementById("internshipList");
const emptyState = document.getElementById("emptyState");
const errorState = document.getElementById("errorState");

function displayInternships(list) {
    internshipList.innerHTML = "";

    if (list.length === 0) {
        emptyState.hidden = false;
        return;
    }

    emptyState.hidden = true;

    list.forEach((internship) => {
        const card = document.createElement("article");

        card.className = "internship-card";
        card.tabIndex = 0;

        card.innerHTML = `
            <h3>${internship.title}</h3>
            <p><strong>Company:</strong> ${internship.company}</p>
            <p><strong>Domain:</strong> ${internship.domain}</p>
            <p><strong>Location:</strong> ${internship.location}</p>
            <p><strong>Duration:</strong> ${internship.duration}</p>
        `;

        internshipList.appendChild(card);
    });
}

function filterInternships() {
    try {
        errorState.hidden = true;

        const searchText = searchInput.value.toLowerCase().trim();
        const selectedDomain = domainFilter.value;

        const filteredInternships = internships.filter((internship) => {
            const matchesSearch =
                internship.title.toLowerCase().includes(searchText) ||
                internship.company.toLowerCase().includes(searchText);

            const matchesDomain =
                selectedDomain === "all" ||
                internship.domain === selectedDomain;

            return matchesSearch && matchesDomain;
        });

        displayInternships(filteredInternships);
    } catch (error) {
        errorState.hidden = false;
        internshipList.innerHTML = "";
        emptyState.hidden = true;
    }
}

searchForm.addEventListener("submit", function (event) {
    event.preventDefault();
    filterInternships();
});

domainFilter.addEventListener("change", filterInternships);

searchInput.addEventListener("input", filterInternships);

displayInternships(internships);