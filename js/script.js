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
            generi: [],
            selected: ''
        },

        methods: {
            filteredDischi: function () {
                if (this.selected == '') {
                    return this.all;
                }
                let fAll = [];
                for (let i = 0; i < this.all.length; i++) {
                    const disco = this.all[i];
                    if (disco.genre == this.selected) {
                        fAll.push(disco);
                    }
                }
                return fAll;
            }
        },

        mounted() {
            axios.get('https://flynn.boolean.careers/exercises/api/array/music')
                .then(data => {

                    let elem = data.data.response;

                    this.all = elem;

                    // sort usato per ordine di date crescente
                    this.all.sort((x, y) => x.year - y.year);

                    // selezione di generi
                    for (let i = 0; i < elem.length; i++) {
                        const disco = elem[i];
                        const genere = disco.genre;
                        if (!this.generi.includes(genere)) {
                            this.generi.push(genere);
                        }
                    }

                    console.log(this.all)

                })
                .catch(() => console.log('error'));
        }
    });
}

document.addEventListener('DOMContentLoaded', init);