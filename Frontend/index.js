import axios from "axios";

document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var formData = new FormData(this);
    
    let number1 = formData.get('number1');
    let number2 = formData.get('number2');
    let number3 = formData.get('number3');

    console.log('Number 1:', number1);
    console.log('Number 2:', number2);
    console.log('Number 3:', number3);
    
    async function sendData(){
        try {
            const response = await axios("http://localhost:3000/data", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                data:({
                    number1: number1,
                    number2: number2,
                    number3: number3
                })
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const responseData = await response.json();
            console.log(responseData); // Log the response data
        } catch (error) {
            console.error("Fetch error:", error);
        }
    }

    sendData();
    this.reset();
});
