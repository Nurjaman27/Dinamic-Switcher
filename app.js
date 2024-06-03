const result = document.getElementById("result")

let hobbyList = []

function saveHobbyInput() {
    const input = document.getElementById("hobbyInput")
    const hobby = input.value
    
    if (input.value !== "") {
        let task = document.createElement("li");
        
        hobbyList.push(hobby)
        task.innerHTML = input.value
        result.appendChild(task);
        
    }
}

function switcher() {
    const from = document.getElementById("from")
    const to = document.getElementById("to")
    
    if (from.value < 1 || from.value >= hobbyList.length + 1 || to.value < 1 || to.value >= hobbyList.length + 1) {
        alert("Tidak ada data")
    }else {
        let x = hobbyList[from.value -1];
        hobbyList[from.value - 1] = hobbyList[to.value -1];
        hobbyList[to.value -1] = x;
        
        updateList()
    }
}

function updateList() {
    
    result.innerHTML = '';
  
    hobbyList.forEach(function(item) {
      let li = document.createElement('li');
      li.textContent = item;
      result.appendChild(li);
    });
  }