"use strict";

module.exports = function (_this, window) {
    return function () {
        _this.state.camera.aspect = window.innerWidth / window.innerHeight;
        _this.state.camera.updateProjectionMatrix();
        _this.state.renderer.setSize(window.innerWidth, window.innerHeight);
    };
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInV0aWxzL29uV2luZG93UmVzaXplLmpzIl0sIm5hbWVzIjpbIm1vZHVsZSIsImV4cG9ydHMiLCJfdGhpcyIsIndpbmRvdyIsInN0YXRlIiwiY2FtZXJhIiwiYXNwZWN0IiwiaW5uZXJXaWR0aCIsImlubmVySGVpZ2h0IiwidXBkYXRlUHJvamVjdGlvbk1hdHJpeCIsInJlbmRlcmVyIiwic2V0U2l6ZSJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxPQUFPLEFBQVAsVUFBaUIsVUFBQyxBQUFELE9BQVEsQUFBUixRQUFtQixBQUNoQztXQUFPLFlBQU0sQUFDVDtjQUFNLEFBQU4sTUFBWSxBQUFaLE9BQW1CLEFBQW5CLFNBQTRCLE9BQU8sQUFBUCxhQUFvQixPQUFPLEFBQXZELEFBQ0E7Y0FBTSxBQUFOLE1BQVksQUFBWixPQUFtQixBQUFuQixBQUNBO2NBQU0sQUFBTixNQUFZLEFBQVosU0FBcUIsQUFBckIsUUFBNkIsT0FBTyxBQUFwQyxZQUFnRCxPQUFPLEFBQXZELEFBQ0g7QUFKRCxBQUtIO0FBTkQiLCJmaWxlIjoib25XaW5kb3dSZXNpemUuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2ZyYW5jb2FndXN0aW5yYWJhZ2xpYS9EZXZlbG9wL05leHQgYXBwcy9teS1uZXctd2Vic2l0ZSJ9