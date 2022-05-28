document.addEventListener("DOMContentLoaded", () => {
    const spanElement = document.getElementById('api-output-span');

    const getInformation = async () => {
      const response = await fetch('https://fcc-header.dmnk28.repl.co/api/whoami')
                            .then(response => response.json());
        return response;
      }
      
    getInformation().then(data => {
      spanElement.innerText = JSON.stringify(data);
    });
  })