let btnOpen = document.querySelector(".btnOpen");
let box = document.querySelector(".box");
let body = document.querySelector("body");//Note: this is not a class but a tage name. that is why it is not referenced with the "." sign
let close = document.querySelector(".close");
 btnOpen.addEventListener("click", ()=>{
   btnOpen.style.display="none";
   box.style.display="block";
   body.style.bacgroundColor="#222"
 });
 close.addEventListener("click", ()=>{
   btnOpen.style.display="block"
   box.style.display="none";
   body.style.bacgroundColor="#999";
 });
 
 // chatgpt
document.addEventListener('DOMContentLoaded', () => {
    const btnOpen = document.querySelector('.btnOpen');
    const box = document.querySelector('.box');
    const btnClose = document.querySelector('.close');
    const btnSubmit = document.querySelector('.btnSubmit');
    const eventList = document.getElementById('eventList');

    let events = [];

    btnOpen.addEventListener('click', () => {
        clearForm();
        box.style.display = 'block';
    });

    btnClose.addEventListener('click', () => {
        box.style.display = 'none';
    });

    btnSubmit.addEventListener('click', (event) => {
        event.preventDefault();
        const eventId = document.getElementById('eventId').value;
        if (eventId) {
            updateEvent(eventId);
        } else {
            addEvent();
        }
        box.style.display = 'none';
    });

    function addEvent() {
        const nama = document.querySelector('.nama').value;
        const tanggal = document.querySelector('.tanggal').value;
        const alamat = document.querySelector('.alamat').value;
        const keluarga = document.querySelector('.keluarga').value;

        if (nama && tanggal && alamat && keluarga) {
            const event = {
                id: Date.now(),
                nama,
                tanggal,
                alamat,
                keluarga
            };
            events.push(event);
            renderEvent(event);
            clearForm();
        } else {
            alert('Please fill in all fields');
        }
    }

    function updateEvent(eventId) {
        const nama = document.querySelector('.nama').value;
        const tanggal = document.querySelector('.tanggal').value;
        const alamat = document.querySelector('.alamat').value;
        const keluarga = document.querySelector('.keluarga').value;

        if (nama && tanggal && alamat && keluarga) {
            const eventIndex = events.findIndex(event => event.id == eventId);
            if (eventIndex > -1) {
                events[eventIndex] = { id: eventId, nama, tanggal, alamat, keluarga };
                renderEvents();
                clearForm();
            }
        } else {
            alert('Please fill in all fields');
        }
    }

    function deleteEvent(eventId) {
        events = events.filter(event => event.id != eventId);
        renderEvents();
    }

    function renderEvents() {
        eventList.innerHTML = '';
        events.forEach(event => renderEvent(event));
    }

    function renderEvent(event) {
        const li = document.createElement('li');
        const mapId = `map-${event.id}`;
        li.innerHTML = `
            <h3>${event.nama}</h3>
            <p><strong>Tanggal:</strong> ${event.tanggal}</p>
            <p><strong>Alamat:</strong> ${event.alamat}</p>
            <div id="${mapId}" class="map"></div>
            <a href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(event.alamat)}" target="_blank" class="google-maps-button">Buka di Google Maps</a>
            <button class="edit-button" onclick="editEvent(${event.id})">Edit</button>
            <button class="delete-button" onclick="deleteEvent(${event.id})">Hapus</button>
            <p><strong>Keluarga:</strong> ${event.keluarga}</p>
        `;
        eventList.appendChild(li);
        initMap(mapId, event.alamat);
    }

    function clearForm() {
        document.getElementById('eventId').value = '';
        document.querySelector('.nama').value = '';
        document.querySelector('.tanggal').value = '';
        document.querySelector('.alamat').value = '';
        document.querySelector('.keluarga').value = '';
    }

    window.initMap = function(mapId, address) {
        const mapElement = document.getElementById(mapId);
        const geocoder = new google.maps.Geocoder();

        geocoder.geocode({ 'address': address }, (results, status) => {
            if (status === 'OK') {
                const map = new google.maps.Map(mapElement, {
                    zoom: 15,
                    center: results[0].geometry.location
                });
                new google.maps.Marker({
                    position: results[0].geometry.location,
                    map: map
                });
            } else {
                alert('Geocode was not successful for the following reason: ' + status);
            }
        });
    };

    window.editEvent = function(eventId) {
        const event = events.find(event => event.id == eventId);
        if (event) {
            document.getElementById('eventId').value = event.id;
            document.querySelector('.nama').value = event.nama;
            document.querySelector('.tanggal').value = event.tanggal;
            document.querySelector('.alamat').value = event.alamat;
            document.querySelector('.keluarga').value = event.keluarga;
            box.style.display = 'block';
        }
    };

    window.deleteEvent = function(eventId) {
        if (confirm('Are you sure you want to delete this event?')) {
            deleteEvent(eventId);
        }
    };
});
