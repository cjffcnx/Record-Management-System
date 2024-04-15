// Sample record structure: { name: "John", deposit: 100, withdraw: 50 }

let records = [];

function addRecord() {
    const name = document.getElementById('name').value;
    const deposit = parseFloat(document.getElementById('deposit').value) || 0;
    const withdraw = parseFloat(document.getElementById('withdraw').value) || 0;

    if (name && (deposit || withdraw)) {
        const record = { name, deposit, withdraw };
        records.push(record);
        displayRecords();
        clearInputFields();
    } else {
        alert("Please enter valid data for Name and at least one of the Amount fields.");
    }
}

function displayRecords() {
    const table = document.getElementById('recordsTable');
    const tbody = table.getElementsByTagName('tbody')[0];

    // Clear existing rows
    while (tbody.firstChild) {
        tbody.removeChild(tbody.firstChild);
    }

    // Populate table with records
    records.forEach((record, index) => {
        const row = tbody.insertRow();
        const cell1 = row.insertCell(0);
        const cell2 = row.insertCell(1);
        const cell3 = row.insertCell(2);
        const cell4 = row.insertCell(3);

        cell1.innerHTML = record.name;
        cell2.innerHTML = record.deposit;
        cell3.innerHTML = record.withdraw;

        const deleteButton = document.createElement('button');
        deleteButton.innerHTML = 'Delete';
        deleteButton.onclick = function() {
            deleteRecord(index);
        };

        cell4.appendChild(deleteButton);
    });
}

function deleteRecord(index) {
    records.splice(index, 1);
    displayRecords();
}

function clearInputFields() {
    document.getElementById('name').value = '';
    document.getElementById('deposit').value = '';
    document.getElementById('withdraw').value = '';
}

function showCalculator() {
    const calculator = document.getElementById('calculator');
    calculator.style.display = calculator.style.display === 'none' ? 'block' : 'none';
    if (calculator.style.display === 'block') {
        // Generate calculator content
        calculator.innerHTML = `
            <label for="calcInput">Calculator:</label>
            <input type="text" id="calcInput" disabled>
             
            <br>
            <button  onclick="closeCalculator()">X</button>
            <br>
            <button  onclick="appendToCalculator('1')">1</button>
            <button onclick="appendToCalculator('2')">2</button>
            <button onclick="appendToCalculator('3')">3</button>
            <button onclick="appendToCalculator('+')">+</button>
            <br>
            <button onclick="appendToCalculator('4')">4</button>
            <button onclick="appendToCalculator('5')">5</button>
            <button onclick="appendToCalculator('6')">6</button>
            <button onclick="appendToCalculator('-')">-</button>
            <br>
            <button onclick="appendToCalculator('7')">7</button>
            <button onclick="appendToCalculator('8')">8</button>
            <button onclick="appendToCalculator('9')">9</button>
            <button onclick="appendToCalculator('*')">*</button>
            <br>
            <button onclick="appendToCalculator('0')">0</button>
            <button onclick="clearCalculator()">C</button>
            <button onclick="calculateResult()">=</button>
            <button onclick="appendToCalculator('/')">/</button>
              
        `;
    }
}

function appendToCalculator(value) {
    const calcInput = document.getElementById('calcInput');
    calcInput.value += value;
}

function clearCalculator() {
    const calcInput = document.getElementById('calcInput');
    calcInput.value = '';
}

function calculateResult() {
    const calcInput = document.getElementById('calcInput');
    try {
        calcInput.value = eval(calcInput.value);
    } catch (error) {
        calcInput.value = 'Error';
    }
}
function closeCalculator() {
    document.getElementById("calculator").style.display = "none";
}
function initMap() {
    // Google Maps Initialization
    const mapOptions = {
        center: { lat: -34.397, lng: 150.644 }, // Default center coordinates
        zoom: 8, // Default zoom level
    };

    const map = new google.maps.Map(document.getElementById('map'), mapOptions);
}
function updateTime() {
    const timeElement = document.getElementById('time');
    const currentTime = new Date();
    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    const seconds = currentTime.getSeconds();

    const formattedTime = `${hours}:${minutes}:${seconds}`;
    timeElement.textContent = formattedTime;

    setTimeout(updateTime, 1000); // Update every 1 second
}

// Initial call to start updating time
updateTime();
