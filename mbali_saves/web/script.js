 // Replaces the C++ loop for adding items dynamically
    function addExpenseRow() {
        const container = document.getElementById('expense-list');
        const newRow = document.createElement('div');
        newRow.className = 'expense-row';
        newRow.innerHTML = `
            <input type="text" class="expense-name" placeholder="item name">
            <input type="number" class="expense-amount" placeholder="amount (R)" step="0.01">
        `;
        container.appendChild(newRow);
    }

    // Handles the core math and formatting logic from your main()
    function calculateBudget() {
        // Get budget size
        const budgetSize = parseFloat(document.getElementById('income').value) || 0;

        // Collect expenses from the generated rows
        const nameInputs = document.querySelectorAll('.expense-name');
        const amountInputs = document.querySelectorAll('.expense-amount');
        
        let itemPricesTotal = 0;
        let tableRows = "";

        for (let i = 0; i < nameInputs.length; i++) {
            const name = nameInputs[i].value || `item_${i + 1}`;
            const amount = parseFloat(amountInputs[i].value) || 0;

            itemPricesTotal += amount;

            // Mimics your C++ setw(10) and alignment strings
            const paddedName = name.padEnd(12, ' ');
            tableRows += `${paddedName} \t R${amount.toFixed(2)}\n`;
        }

        // Calculate leftover money
        const leftOver = budgetSize - itemPricesTotal;

        // Build the final terminal output layout exactly like your C++ script
        let outputText = "expense      \t amount\n";
        outputText += "--------------------------\n";
        outputText += tableRows;
        outputText += "__________________________\n";
        outputText += `total        \t R${itemPricesTotal.toFixed(2)}\n`;
        outputText += `balance      \t R${leftOver.toFixed(2)}\n`;

        // Display it on the page
        const outputDiv = document.getElementById('console-output');
        outputDiv.textContent = outputText;
        outputDiv.style.display = "block";
    }