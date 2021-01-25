/* Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
Bonus: Aggiungere un’immagine presa anch’essa da un data assieme al valore alt dell'attributo.
Poi aggiungete all'immagine una classe sempre presa dal data. */

var ready = new Vue({
    el: '#hello',
    data: {
        message: 'Primo approccio a Vue.js',
        src: 'https://vuejs.org/images/logo.png',
        alt: 'Logo Vue',
        textButton: 'Inverti colori',
        logoFormat: 'logo',
        color: 'white',
        bgColor: 'bgc-black'
    },
    methods: {
        inverter() {
            (this.color == 'white') 
            ? (this.color = 'black',  this.bgColor = 'bgc-white')
            : (this.color = 'white', this.bgColor = 'bgc-black');
        }
    }
});