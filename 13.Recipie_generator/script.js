const baseUrl = "https://www.themealdb.com/api/json/v1/1/search.php?s=";

document.getElementById("srchBtn").addEventListener('click', getMealData);

function getMealData() {
    const foodName = document.getElementById("srchInput").value.trim(); // Trim spaces
    const url = baseUrl + encodeURIComponent(foodName);
    
    console.log("Fetching from URL:", url); // Log the URL being fetched

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error("HTTP ERROR! Status: " + response.status);
            }
            return response.json();
        })
        .then(data => {
            console.log("API Response:", data); // Log the API response
            
            // Check if 'meals' exists in the returned data
            if (data && data.meals && data.meals.length > 0) {
                const meal = data.meals[0];

                // Set the image source and style
                const img = document.querySelector("#foodImg img");
                img.src = meal.strMealThumb;
                img.style.width = "300px";
                img.style.height = "168px";
                img.style.display = "block"; // Ensure the image is visible

                // Set meal name and area
                document.querySelector("#foodName h1").textContent = meal.strMeal;
                document.querySelector("#foodName p").textContent = meal.strArea;

                // Prepare the ingredients list
                const ingredients = [];
                for (let i = 1; i <= 20; i++) { // Start from 1
                    const ing = meal[`strIngredient${i}`];
                    const measure = meal[`strMeasure${i}`];
                    if (ing) { // Check if the ingredient exists
                        ingredients.push(`${measure} ${ing}`);
                    }
                }
                document.getElementById("foodIng").innerHTML = `<h3>Ingredients:</h3><p>${ingredients.join("<br>")}</p>`;
            } else {
                alert("Meal not found. Please try another name.");
                clearDisplay();
            }
        })
        .catch(error => {
            console.error("Error fetching meal data:", error);
            alert("An error occurred: " + error.message); // Show error message
            clearDisplay();
        });
}

function clearDisplay() {
    const img = document.querySelector("#foodImg img");
    img.style.display = "none"; // Hide the image
    img.src = ""; // Clear the image source
    document.querySelector("#foodName h1").textContent = ""; // Clear the meal name
    document.querySelector("#foodName p").textContent = ""; // Clear the meal area
    document.getElementById("foodIng").innerHTML = ""; // Clear ingredients
}

// Event listener for the recipe button
document.getElementById("rcpBtn").addEventListener('click', showRecipe);

function showRecipe() {
    // Logic to show the recipe (for now, just a placeholder)
    alert("Recipe functionality coming soon!");
}
