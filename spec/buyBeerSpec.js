describe('canBuyBeer', () => {
    describe('when age is over 17', () => {
        it('should return true', () => {
            const result = canBuyBeer(18);

            expect(result).toBe(true);
        });
    });
    describe('when age is 17 or less', () => {
        it('should return false', () => {
            const result17 = canBuyBeer(17);
            const result10 = canBuyBeer (10);

            expect(result17).toBe(false);
            expect(result10).toBe(false);            
        });
    });
});


describe('canGregBuyBeer', () => {
    describe('when greg\'s age is over 18', () => {
        it('should return Greg is 18, he can buy Beer!', () => {

            //mock greg age
            const originalAge = greg.age   
            greg.age = 18;

            const result = canGregBuyBeer();

            expect(result).toBe('Greg is 18, he can buy beer!');
            greg.age = originalAge
        });
    });
});


