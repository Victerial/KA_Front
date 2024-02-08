function loadFile() {
  const fileInput = document.getElementById('fileInput');
  const fileNameInput = document.getElementById('fileName');
  const editor = document.getElementById('editor');

  fileInput.addEventListener('change', function() {
    const file = fileInput.files[0];
    const reader = new FileReader();
    reader.onload = function(event) {
      const contents = event.target.result;
      editor.value = contents;
      fileNameInput.value = file.name;
    };
    reader.readAsText(file);
  });
}

function saveFile() {
  const fileName = document.getElementById('fileName').value;
  const editorContent = document.getElementById('editor').value;
  const blob = new Blob([editorContent], { type: 'text/plain' });
  const url = URL.createObjectURL(blob);

  const a = document.createElement('a');
  a.href = url;
  a.download = fileName;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);

  URL.revokeObjectURL(url);
  document.getElementById('feedback').innerText = 'Mentés sikeres!';
}

loadFile();