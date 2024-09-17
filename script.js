    const modifyString = (str) => {
        return str
            .split('')
            .map((char, index) => `${index}${char.toUpperCase()}`)
            .join('');
    };

    const displayModifiedString = () => {
        const input = document.getElementById('userInput').value;
        const modifiedString = modifyString(input);
        const outputDiv = document.getElementById('output');
        
        outputDiv.innerHTML = '';
        
        modifiedString.split('').forEach((char, index) => {
            const span = document.createElement('span');
            span.textContent = char;
            outputDiv.appendChild(span);
        });
    };
