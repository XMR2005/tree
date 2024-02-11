class Tree {

    constructor(arr, element) {
        this.arr = arr
        this.element = element
    }

    recon() {
        let mem = null
        for (let i = 0; i < this.arr.length;) {
            let ind = 0
            for (let j = 0; j < this.arr.length; j++) {
                const el = this.arr[j];
                if (el.head == mem) {
                    ind = j
                }
            }
            let removedEl = this.arr.splice(ind, 1)
            mem = removedEl[0].id
            this.pushHtml(removedEl[0])
        }
    }

    pushHtml(el) {
        let p = document.createElement('p')
        p.dataset.id = el.id
        p.dataset.sorthead = el.sorthead
        p.dataset.node = el.node
        p.append('- ' + el.name)
        if (el.node == 0) {
            p.append(' ' + el.price)
        }
        let cont = null
        if (el.head == null) {
            cont = document.querySelector(this.element)

        } else {
            cont = document.querySelector(`[data-id="${el.head}"]`)
        }
        cont.append(p)
        let bro = cont.querySelectorAll(':scope > p')
        Array.from(bro).sort(function (a, b) {
            if (a.dataset.sorthead < b.dataset.sorthead) {
                let hel = b.parentNode
                hel.insertBefore(a, b)
                return -1;
            }
            return 0;
        });
    }

    crhtml(html) { // преобразует строку в html
        let div = document.createElement('div')
        div.innerHTML = html
        return div
    }

}