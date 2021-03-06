document.addEventListener("DOMContentLoaded", function (e) {
    "use strict";
    new Swiper(".featured-slider", {
        slidesPerView: 1,
        loop: !0,
        speed: 640,
        pagination: {
            el: ".swiper-pagination",
            clickable: !0,
            renderBullet: function (e, t) {
                return '<a href="#featured-slider" data-scroll class="' + t + '">' + this.slides[e + 1].dataset.title + "</a>"
            }
        },
        effect: "fade",
        fadeEffect: {
            crossFade: !0
        },
        autoplay: {
            delay: 8e3,
            disableOnInteraction: !1
        },
        watchOverflow: !0,
        simulateTouch: !1,
        autoHeight: !0
    })
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuanMiXSwibmFtZXMiOlsiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJTd2lwZXIiLCJzbGlkZXNQZXJWaWV3IiwibG9vcCIsInNwZWVkIiwicGFnaW5hdGlvbiIsImVsIiwiY2xpY2thYmxlIiwicmVuZGVyQnVsbGV0IiwiaW5kZXgiLCJjbGFzc05hbWUiLCJ0aGlzIiwic2xpZGVzIiwiZGF0YXNldCIsInRpdGxlIiwiZWZmZWN0IiwiZmFkZUVmZmVjdCIsImNyb3NzRmFkZSIsImF1dG9wbGF5IiwiZGVsYXkiLCJkaXNhYmxlT25JbnRlcmFjdGlvbiIsIndhdGNoT3ZlcmZsb3ciLCJzaW11bGF0ZVRvdWNoIiwiYXV0b0hlaWdodCJdLCJtYXBwaW5ncyI6IkFBQUFBLFNBQVNDLGlCQUFpQixtQkFBb0IsU0FBU0MsR0FDdEQsYUFHc0IsSUFBSUMsT0FBTyxtQkFBb0IsQ0FDbkRDLGNBQWUsRUFDZkMsTUFBTSxFQUNOQyxNQUFPLElBQ1JDLFdBQVksQ0FDTEMsR0FBSSxxQkFDSkMsV0FBVyxFQUNYQyxhQUFjLFNBQVVDLEVBQU9DLEdBQ2pDLE1BQU8saURBQW1EQSxFQUFZLEtBQU9DLEtBQUtDLE9BQU9ILEVBQU0sR0FBR0ksUUFBUUMsTUFBUSxTQUdwSEMsT0FBUSxPQUNSQyxXQUFZLENBQ1hDLFdBQVcsR0FFZkMsU0FBVSxDQUNOQyxNQUFPLElBQ1BDLHNCQUFzQixHQUV2QkMsZUFBZSxFQUNsQkMsZUFBZSxFQUVmQyxZQUFZIiwiZmlsZSI6ImhvbWUtbWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24oZXZlbnQpIHtcblx0XCJ1c2Ugc3RyaWN0XCI7XG5cblx0Ly8gRmVhdHVyZSBzbGlkZXIgaW5pdFxuXHR2YXIgZmVhdHVyZWRfc2xpZGVyID0gbmV3IFN3aXBlcignLmZlYXR1cmVkLXNsaWRlcicsIHtcblx0IFx0c2xpZGVzUGVyVmlldzogMSxcblx0IFx0bG9vcDogdHJ1ZSxcblx0IFx0c3BlZWQ6IDY0MCxcblx0XHRwYWdpbmF0aW9uOiB7XG5cdCAgICAgICAgZWw6ICcuc3dpcGVyLXBhZ2luYXRpb24nLFxuXHQgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcblx0ICAgICAgICByZW5kZXJCdWxsZXQ6IGZ1bmN0aW9uIChpbmRleCwgY2xhc3NOYW1lKSB7XG5cdFx0XHQgICAgcmV0dXJuICc8YSBocmVmPVwiI2ZlYXR1cmVkLXNsaWRlclwiIGRhdGEtc2Nyb2xsIGNsYXNzPVwiJyArIGNsYXNzTmFtZSArICdcIj4nICsgdGhpcy5zbGlkZXNbaW5kZXgrMV0uZGF0YXNldC50aXRsZSArICc8L2E+Jztcblx0XHRcdH1cblx0ICAgIH0sXG5cdCAgICBlZmZlY3Q6ICdmYWRlJyxcblx0ICAgIGZhZGVFZmZlY3Q6IHtcblx0XHQgICAgY3Jvc3NGYWRlOiB0cnVlXG5cdFx0fSxcblx0XHRhdXRvcGxheToge1xuICAgIFx0XHRkZWxheTogODAwMCxcbiAgICBcdFx0ZGlzYWJsZU9uSW50ZXJhY3Rpb246IGZhbHNlXG4gIFx0XHR9LFxuXHQgICAgd2F0Y2hPdmVyZmxvdzogdHJ1ZSxcblx0XHRzaW11bGF0ZVRvdWNoOiBmYWxzZSxcblxuXHRcdGF1dG9IZWlnaHQ6IHRydWUsXG5cdH0pO1xufSk7Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9