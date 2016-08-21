import PlayingCard from "utils/playing-card";

describe("utils", function () {
  describe("PlayingCard", function () {
    var playingCard;

    describe("the nine of spades", function () {
      beforeEach(function () {
        playingCard = new PlayingCard({face: "nine", suit: "spades"});
      });

      it("can be converted into a string", function () {
        expect(playingCard.toString()).toBe("9♠")
      });

      it("indicates its color", function () {
        expect(playingCard.color()).toBe("black");
      });
    });

    describe("the 10 of clubs", function () {
      beforeEach(function () {
        playingCard = new PlayingCard({face: "ten", suit: "clubs"});
      });

      it("can be converted into a string", function () {
        expect(playingCard.toString()).toBe("10♣")
      });

      it("indicates its color", function () {
        expect(playingCard.color()).toBe("black");
      });
    });

    describe("the jack of hearts", function () {
      beforeEach(function () {
        playingCard = new PlayingCard({face: "jack", suit: "hearts"});
      });

      it("can be converted into a string", function () {
        expect(playingCard.toString()).toBe("J♥")
      });

      it("indicates its color", function () {
        expect(playingCard.color()).toBe("red");
      });
    });

    describe("the queen of diamonds", function () {
      beforeEach(function () {
        playingCard = new PlayingCard({face: "queen", suit: "diamonds"});
      });

      it("can be converted into a string", function () {
        expect(playingCard.toString()).toBe("Q♦")
      });

      it("indicates its color", function () {
        expect(playingCard.color()).toBe("red");
      });
    });

    describe("the king of spades", function () {
      beforeEach(function () {
        playingCard = new PlayingCard({face: "king", suit: "spades"});
      });

      it("can be converted into a string", function () {
        expect(playingCard.toString()).toBe("K♠")
      });

      it("indicates its color", function () {
        expect(playingCard.color()).toBe("black");
      });
    });

    describe("the ace of hearts", function () {
      beforeEach(function () {
        playingCard = new PlayingCard({face: "ace", suit: "hearts"});
      });

      it("can be converted into a string", function () {
        expect(playingCard.toString()).toBe("A♥")
      });

      it("indicates its color", function () {
        expect(playingCard.color()).toBe("red");
      });
    });
  });
});
