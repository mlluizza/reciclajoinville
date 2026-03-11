document.getElementById('fileInput').addEventListener('change', function() {
    const file = this.files[0];
    var fileName = file ? file.name : 'Nenhum arquivo selecionado';
    document.getElementById('fileName').textContent = 'Select file: ' + fileName;
});