
// Day dropdown
var dayDropdown = document.getElementById('day');

for (var i = 1; i <= 31; i++) {
    var option = document.createElement('option');
    var value = (i < 10) ? '0' + i : '' + i; 
    option.value = value;
    option.textContent = i;
    dayDropdown.appendChild(option);
}
var monthDropdown = document.getElementById('month');

// Array for month names
var months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
];

// Month dropdown
for (var i = 0; i < months.length; i++) {
    var option = document.createElement('option');
    var value = (i + 1 < 10) ? '0' + (i + 1) : '' + (i + 1); 
    option.value = value;
    option.textContent = months[i];
    monthDropdown.appendChild(option);
}