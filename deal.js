const columnCount = 7;

function deal() {
    let k = 0
    for (let row = 0; row < 7; row++) {
        for (let col = row; col < 7; col++) {
            let card = this.cards[k];
            k++
            this.columns[col].cards.push(card);
            if (col == row) {
                card.reversed = false;
            }
            else { card.reversed = true; }
        }
    }
    /*
        for (let i = 1; i < 7; i++) {
            let card = this.cards[i];
            this.columns[i].cards.push(card);
            if (i==1){
                card.reversed = false;
            }
            else { card.reversed = true; }
        }
    
        for (let i = 2; i < 7; i++) {
            let card = this.cards[i];
            this.columns[i].cards.push(card);
            if (i==2) {
                card.reversed = false;
            }
            else { card.reversed = true; }
        }
    
        for (let i = 3; i < 7; i++) {
            let card = this.cards[i];
            this.columns[i].cards.push(card);
            if (i==3) {
                card.reversed = false;
            }
            else { card.reversed = true; }
        }
    
        for (let i = 4; i < 7; i++) {
            let card = this.cards[i];
            this.columns[i].cards.push(card);
            if (i==4) {
                card.reversed = false;
            }
            else { card.reversed = true; }
        }
    
        for (let i = 5; i < 7; i++) {
            let card = this.cards[i];
            this.columns[i].cards.push(card);
            if (i==5) {
                card.reversed = false;
            }
            else { card.reversed = true; }
        }
    
        for (let i = 6; i < 7; i++) {
            let card = this.cards[i];
            this.columns[i].cards.push(card);
            if (i==6) {
                card.reversed = false;
            }
            else { card.reversed = true; }
        }*/
}
