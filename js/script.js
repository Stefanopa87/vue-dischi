// Attraverso una chiamata axios all'API di boolean
// https://flynn.boolean.careers/exercises/api/array/music
// avremo a disposizione una decina di dischi musicali. 
// Utilizzando vue, stampiamo a schermo una card per ogni album.

// BONUS: Creare una select con tutti i generi dei dischi.
// In base a cosa scegliamo nella select, vedremo i corrispondenti cd.

// BONUS 2: Ordinare i dischi per anno di uscita.


function init() {

    new Vue({

        el: '#app',
        data: {

            all: [],
        },

        mounted() {
            axios.get('https://flynn.boolean.careers/exercises/api/array/music')
                .then(data => {

                    let elem = data.data.response;

                    this.all = elem;

                    console.log(this.all)

                })
                .catch(() => console.log('error'));
        }
    });
}

document.addEventListener('DOMContentLoaded', init);