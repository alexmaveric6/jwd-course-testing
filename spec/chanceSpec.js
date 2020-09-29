describe('headsOrTails', () => {
  describe('when the coin flip is true', () => {
    it('should return heads', () => {
      spyOn(coin, 'flip').and.returnValue(true)

      const result = headsOrTails();
      
      expect(result).toBe('heads');
    });
  });
});
