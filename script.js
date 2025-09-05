        function appendToDisplay(value) {
            document.getElementById('inputBox').value += value;
        }

        function clearDisplay() {
            document.getElementById('inputBox').value = '';
        }

        function displayResult() {
            try {
                const result = eval(document.getElementById('inputBox').value);
                document.getElementById('inputBox').value = result;
            } catch {
                document.getElementById('inputBox').value = "Error";
            }
        }

        function deldisplay() {
            const input = document.getElementById('inputBox');
            input.value = input.value.slice(0, -1);
        }