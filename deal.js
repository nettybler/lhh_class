const columnCount = 7;

function deal() 
{   for(let i = 0; i < 7; i++) {
        let card = this.cards[i];
        this.columns[i].cards.push(card);
        if (i == 0) {
            card.reversed = false;
        } 
        else { card.reversed = true; }
    }

    for (let i = 1; i < 7; i++) {
        let card = this.cards[i];
        this.columns[i].cards.push(card);
        if (i==1) {
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
    }
}
