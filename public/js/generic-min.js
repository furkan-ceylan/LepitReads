document.addEventListener("DOMContentLoaded", function (e) {
    "use strict";
    new SmoothScroll("[data-scroll]");
    var t = document.querySelectorAll(".nav__control"),
        r = function (e) {
            e.preventDefault(), this.parentNode.classList.toggle("uncover")
        };
    if (t)
        for (var l = 0; l < t.length; l++) t[l].addEventListener("click", r, !1);
    var n = document.querySelectorAll(".switch"),
        a = document.querySelectorAll(".close"),
        o = function (e) {
            e.preventDefault(), document.querySelector(this.getAttribute("data-target")).classList.add("reveal"), this.getAttribute("data-related") && document.querySelector(this.getAttribute("data-related")).classList.remove("reveal"), s(), m.update()
        },
        c = function (e) {
            e.preventDefault(), document.querySelector(this.getAttribute("data-target")).classList.remove("reveal"), u()
        };
    if (n)
        for (l = 0; l < n.length; l++) n[l].addEventListener("click", o, !1);
    if (a)
        for (l = 0; l < a.length; l++) a[l].addEventListener("click", c, !1);
    var i = document.querySelector(".overlay"),
        s = function () {
            i.classList.add("reveal")
        },
        u = function () {
            i.classList.remove("reveal")
        };
    i && i.addEventListener("click", function () {
        var e = document.querySelectorAll(".reveal");
        if (e)
            for (var t = 0; t < e.length; t++) e[t].classList.remove("reveal")
    }, !1);
    var d = document.querySelectorAll(".section-toggle"),
        v = function (e) {
            e.preventDefault(), document.querySelector(this.getAttribute("data-target")).classList.toggle("reveal"), f.update()
        };
    if (d)
        for (l = 0; l < d.length; l++) d[l].addEventListener("click", v, !1);
    var f = new LazyLoad({
            elements_selector: ".lazy",
            to_webp: !0
        }),
        m = new LazyLoad({
            elements_selector: ".lazy-sidebar",
            container: document.querySelector(".sidebar__wrapper"),
            to_webp: !0
        }),
        g = document.querySelectorAll(".tabs__link");
    if (g)
        for (l = 0; l < g.length; l++) g[l].addEventListener("click", function () {
            m.update()
        }, !1);
    var L = new SmoothScroll,
        y = document.querySelectorAll(".component-tabs__link"),
        S = function () {
            var e = document.querySelector("#" + this.dataset.parent);
            setTimeout(function () {
                L.animateScroll(e)
            }, 200)
        };
    if (y)
        for (l = 0; l < y.length; l++) y[l].addEventListener("click", S, !1)
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdlbmVyaWMuanMiXSwibmFtZXMiOlsiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJTbW9vdGhTY3JvbGwiLCJuYXZfY29udHJvbCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJ0b2dnbGVOYXYiLCJlIiwicHJldmVudERlZmF1bHQiLCJ0aGlzIiwicGFyZW50Tm9kZSIsImNsYXNzTGlzdCIsInRvZ2dsZSIsImkiLCJsZW5ndGgiLCJwYW5lbF9jb250cm9sIiwicGFuZWxfY2xvc2UiLCJwYW5lbE9wZW4iLCJxdWVyeVNlbGVjdG9yIiwiZ2V0QXR0cmlidXRlIiwiYWRkIiwicmVtb3ZlIiwib3Blbk92ZXJsYXkiLCJzaWRlYmFyTGF6eUxvYWQiLCJ1cGRhdGUiLCJwYW5lbENsb3NlIiwiY2xvc2VPdmVybGF5Iiwib3ZlcmxheSIsImFjdGl2ZV9wYW5lbCIsInNlY3Rpb25fY29udHJvbCIsInNlY3Rpb25Ub2dnbGUiLCJpbWFnZXNMYXp5TG9hZCIsIkxhenlMb2FkIiwiZWxlbWVudHNfc2VsZWN0b3IiLCJ0b193ZWJwIiwiY29udGFpbmVyIiwidGFic19saW5rIiwic2Nyb2xsIiwidGFiX2xpbmtzIiwic2Nyb2xsVGFiIiwidGFiX2FuY2hvciIsImRhdGFzZXQiLCJwYXJlbnQiLCJzZXRUaW1lb3V0IiwiYW5pbWF0ZVNjcm9sbCJdLCJtYXBwaW5ncyI6IkFBQUFBLFNBQVNDLGlCQUFpQixtQkFBb0IsU0FBU0MsR0FDdEQsYUFHbUIsSUFBSUMsYUFBYSxpQkFBcEMsSUFJSUMsRUFBY0osU0FBU0ssaUJBQWtCLGlCQUV6Q0MsRUFBWSxTQUFTQyxHQUN4QkEsRUFBRUMsaUJBQ0ZDLEtBQUtDLFdBQVdDLFVBQVVDLE9BQU8sWUFHbEMsR0FBS1IsRUFDSixJQUFLLElBQUlTLEVBQUksRUFBR0EsRUFBSVQsRUFBWVUsT0FBUUQsSUFDcENULEVBQVlTLEdBQUdaLGlCQUFpQixRQUFTSyxHQUFXLEdBTXpELElBQUlTLEVBQWdCZixTQUFTSyxpQkFBa0IsV0FDOUNXLEVBQWNoQixTQUFTSyxpQkFBa0IsVUFHdENZLEVBQVksU0FBU2YsR0FDeEJBLEVBQU1NLGlCQUdPUixTQUFTa0IsY0FBZVQsS0FBS1UsYUFBYSxnQkFDNUNSLFVBQVVTLElBQUksVUFHcEJYLEtBQUtVLGFBQWEsaUJBQ05uQixTQUFTa0IsY0FBZVQsS0FBS1UsYUFBYSxpQkFDNUNSLFVBQVVVLE9BQU8sVUFHaENDLElBR0FDLEVBQWdCQyxVQUdiQyxFQUFhLFNBQVN2QixHQUN6QkEsRUFBTU0saUJBR09SLFNBQVNrQixjQUFlVCxLQUFLVSxhQUFhLGdCQUM1Q1IsVUFBVVUsT0FBTyxVQUU1QkssS0FJRCxHQUFLWCxFQUNKLElBQVNGLEVBQUksRUFBR0EsRUFBSUUsRUFBY0QsT0FBUUQsSUFDdENFLEVBQWNGLEdBQUdaLGlCQUFpQixRQUFTZ0IsR0FBVyxHQUszRCxHQUFLRCxFQUNKLElBQVNILEVBQUksRUFBR0EsRUFBSUcsRUFBWUYsT0FBUUQsSUFDcENHLEVBQVlILEdBQUdaLGlCQUFpQixRQUFTd0IsR0FBWSxHQUsxRCxJQUFJRSxFQUFVM0IsU0FBU2tCLGNBQWMsWUFFakNJLEVBQWMsV0FDakJLLEVBQVFoQixVQUFVUyxJQUFJLFdBR25CTSxFQUFlLFdBQ2xCQyxFQUFRaEIsVUFBVVUsT0FBTyxXQWNyQk0sR0FDSkEsRUFBUTFCLGlCQUFpQixRQVpMLFdBQ3BCLElBQUkyQixFQUFlNUIsU0FBU0ssaUJBQWtCLFdBRzlDLEdBQUt1QixFQUNKLElBQUssSUFBSWYsRUFBSSxFQUFHQSxFQUFJZSxFQUFhZCxPQUFRRCxJQUNyQ2UsRUFBYWYsR0FBR0YsVUFBVVUsT0FBTyxZQU1ZLEdBS25ELElBQUlRLEVBQWtCN0IsU0FBU0ssaUJBQWtCLG1CQUc3Q3lCLEVBQWdCLFNBQVM1QixHQUM1QkEsRUFBTU0saUJBRVNSLFNBQVNrQixjQUFlVCxLQUFLVSxhQUFhLGdCQUM1Q1IsVUFBVUMsT0FBTyxVQUc5Qm1CLEVBQWVQLFVBSWhCLEdBQUtLLEVBQ0osSUFBU2hCLEVBQUksRUFBR0EsRUFBSWdCLEVBQWdCZixPQUFRRCxJQUN4Q2dCLEVBQWdCaEIsR0FBR1osaUJBQWlCLFFBQVM2QixHQUFlLEdBTWpFLElBQUlDLEVBQWlCLElBQUlDLFNBQVMsQ0FDOUJDLGtCQUFtQixRQUNuQkMsU0FBUyxJQUdUWCxFQUFrQixJQUFJUyxTQUFTLENBQy9CQyxrQkFBbUIsZ0JBQ2xCRSxVQUFXbkMsU0FBU2tCLGNBQWMscUJBQ25DZ0IsU0FBUyxJQUlURSxFQUFZcEMsU0FBU0ssaUJBQWtCLGVBRTNDLEdBQUsrQixFQUNKLElBQVN2QixFQUFJLEVBQUdBLEVBQUl1QixFQUFVdEIsT0FBUUQsSUFDbEN1QixFQUFVdkIsR0FBR1osaUJBQWlCLFFBQVMsV0FDdENzQixFQUFnQkMsV0FDZCxHQU1SLElBQUlhLEVBQVMsSUFBSWxDLGFBQ2JtQyxFQUFZdEMsU0FBU0ssaUJBQWlCLHlCQUV0Q2tDLEVBQVksV0FDZixJQUFJQyxFQUFheEMsU0FBU2tCLGNBQWMsSUFBTVQsS0FBS2dDLFFBQVFDLFFBRTNEQyxXQUFXLFdBQ1ZOLEVBQU9PLGNBQWNKLElBQ25CLE1BR0osR0FBS0YsRUFDSixJQUFTekIsRUFBSSxFQUFHQSxFQUFJeUIsRUFBVXhCLE9BQVFELElBQ2xDeUIsRUFBVXpCLEdBQUdaLGlCQUFpQixRQUFTc0MsR0FBVyIsImZpbGUiOiJnZW5lcmljLW1pbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZ1bmN0aW9uKGV2ZW50KSB7XG5cdFwidXNlIHN0cmljdFwiO1xuXHRcblx0Ly8gU2Nyb2xsIGxpbmtzXG5cdHZhciBzY3JvbGxfbGlua3MgPSBuZXcgU21vb3RoU2Nyb2xsKCdbZGF0YS1zY3JvbGxdJyk7XHRcblx0XG5cblx0Ly8gTWVudSBiZWhhdmlvdXJcblx0dmFyIG5hdl9jb250cm9sID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCggJy5uYXZfX2NvbnRyb2wnICk7XG5cblx0dmFyIHRvZ2dsZU5hdiA9IGZ1bmN0aW9uKGUpIHtcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0dGhpcy5wYXJlbnROb2RlLmNsYXNzTGlzdC50b2dnbGUoJ3VuY292ZXInKVxuXHR9O1xuXG5cdGlmICggbmF2X2NvbnRyb2wgKSB7XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBuYXZfY29udHJvbC5sZW5ndGg7IGkrKykge1xuXHRcdCAgICBuYXZfY29udHJvbFtpXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRvZ2dsZU5hdiwgZmFsc2UpO1xuXHRcdH1cblx0fVxuXG5cblx0Ly8gUGFuZWxzIHJldmVhbCBiZWhhdmlvdXJcblx0dmFyIHBhbmVsX2NvbnRyb2wgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCAnLnN3aXRjaCcgKSxcblx0XHRwYW5lbF9jbG9zZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoICcuY2xvc2UnICksXG5cdFx0cGFuZWxfYm9keSwgcGFuZWxfcmVsYXRlZDtcblxuXHR2YXIgcGFuZWxPcGVuID0gZnVuY3Rpb24oZXZlbnQpIHtcblx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG5cdFx0Ly8gZGV0ZWN0IHRhcmdldCBwYW5lbFxuXHRcdHBhbmVsX2JvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCB0aGlzLmdldEF0dHJpYnV0ZSgnZGF0YS10YXJnZXQnKSApO1xuXHRcdHBhbmVsX2JvZHkuY2xhc3NMaXN0LmFkZCgncmV2ZWFsJyk7XG5cblx0XHQvLyBkZXRlY3QgcmVsYXRlZCBwYW5lbCAoY2FsbCBvcGVuIHBhbmVsIGluc2lkZSBhbm90aGVyIHBhbmVsKVxuXHRcdGlmICggdGhpcy5nZXRBdHRyaWJ1dGUoJ2RhdGEtcmVsYXRlZCcpICkge1xuXHRcdFx0cGFuZWxfcmVsYXRlZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoIHRoaXMuZ2V0QXR0cmlidXRlKCdkYXRhLXJlbGF0ZWQnKSApO1xuXHRcdFx0cGFuZWxfcmVsYXRlZC5jbGFzc0xpc3QucmVtb3ZlKCdyZXZlYWwnKTtcblx0XHR9XG5cblx0XHRvcGVuT3ZlcmxheSgpO1xuXG5cdFx0Ly9jaGVjayBmb3IgbmV3IGxhenkgaW1hZ2VzIGluIHBhbmVsXG5cdFx0c2lkZWJhckxhenlMb2FkLnVwZGF0ZSgpO1xuXHR9O1xuXG5cdHZhciBwYW5lbENsb3NlID0gZnVuY3Rpb24oZXZlbnQpIHtcblx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFxuXHRcdC8vIGRldGVjdCB0YXJnZXQgcGFuZWxcblx0XHRwYW5lbF9ib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvciggdGhpcy5nZXRBdHRyaWJ1dGUoJ2RhdGEtdGFyZ2V0JykgKTtcblx0XHRwYW5lbF9ib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ3JldmVhbCcpO1xuXG5cdFx0Y2xvc2VPdmVybGF5KCk7XG5cdH07XG5cblx0Ly8gb3BlbiBwYW5lbCBvbiBjbGljayBmb3IgYWxsICcuc3dpdGNoJyBlbGVtZW50c1xuXHRpZiAoIHBhbmVsX2NvbnRyb2wgKSB7XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBwYW5lbF9jb250cm9sLmxlbmd0aDsgaSsrKSB7XG5cdFx0ICAgIHBhbmVsX2NvbnRyb2xbaV0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBwYW5lbE9wZW4sIGZhbHNlKTtcblx0XHR9XG5cdH1cblxuXHQvLyBjbG9zZSBwYW5lbCBvbiBjbGljayBmb3IgYWxsICcuY2xvc2UnIGVsZW1lbnRzXG5cdGlmICggcGFuZWxfY2xvc2UgKSB7XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBwYW5lbF9jbG9zZS5sZW5ndGg7IGkrKykge1xuXHRcdCAgICBwYW5lbF9jbG9zZVtpXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHBhbmVsQ2xvc2UsIGZhbHNlKTtcblx0XHR9XG5cdH1cblxuXHQvLyBvdmVybGF5XG5cdHZhciBvdmVybGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm92ZXJsYXknKTtcblxuXHR2YXIgb3Blbk92ZXJsYXkgPSBmdW5jdGlvbigpIHtcblx0XHRvdmVybGF5LmNsYXNzTGlzdC5hZGQoJ3JldmVhbCcpO1xuXHR9O1xuXG5cdHZhciBjbG9zZU92ZXJsYXkgPSBmdW5jdGlvbigpIHtcblx0XHRvdmVybGF5LmNsYXNzTGlzdC5yZW1vdmUoJ3JldmVhbCcpO1xuXHR9O1xuXG5cdHZhciB0cmlnZ2VyT3ZlcmxheSA9IGZ1bmN0aW9uKCkge1xuXHRcdHZhciBhY3RpdmVfcGFuZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCAnLnJldmVhbCcgKTtcblxuXHRcdC8vIGNsb3NlIGFsbCBvcGVuIHBhbmVscyBhbmQgaGlkZSBvdmVybGF5IGl0c2VsZlxuXHRcdGlmICggYWN0aXZlX3BhbmVsICkge1xuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBhY3RpdmVfcGFuZWwubGVuZ3RoOyBpKyspIHtcblx0XHRcdCAgICBhY3RpdmVfcGFuZWxbaV0uY2xhc3NMaXN0LnJlbW92ZSgncmV2ZWFsJyk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xuXG5cdGlmICggb3ZlcmxheSApIHtcblx0XHRvdmVybGF5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdHJpZ2dlck92ZXJsYXksIGZhbHNlKTtcblx0fVxuXG5cblx0Ly8gU2VjdGlvbiB2aXNpYmlsaXR5IHRvZ2dsZVxuXHR2YXIgc2VjdGlvbl9jb250cm9sID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCggJy5zZWN0aW9uLXRvZ2dsZScgKSxcblx0XHRzZWN0aW9uX2JvZHk7XG5cblx0dmFyIHNlY3Rpb25Ub2dnbGUgPSBmdW5jdGlvbihldmVudCkge1xuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cblx0XHRzZWN0aW9uX2JvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCB0aGlzLmdldEF0dHJpYnV0ZSgnZGF0YS10YXJnZXQnKSApO1xuXHRcdHNlY3Rpb25fYm9keS5jbGFzc0xpc3QudG9nZ2xlKCdyZXZlYWwnKTtcblxuXHRcdC8vY2hlY2sgZm9yIG5ldyBsYXp5IGltYWdlcyBpbiBoaWRkZW4gc2VjdGlvblxuXHRcdGltYWdlc0xhenlMb2FkLnVwZGF0ZSgpO1xuXHR9O1xuXG5cdC8vIG9wZW4gcGFuZWwgb24gY2xpY2sgZm9yIGFsbCAnLnN3aXRjaCcgZWxlbWVudHNcblx0aWYgKCBzZWN0aW9uX2NvbnRyb2wgKSB7XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzZWN0aW9uX2NvbnRyb2wubGVuZ3RoOyBpKyspIHtcblx0XHQgICAgc2VjdGlvbl9jb250cm9sW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2VjdGlvblRvZ2dsZSwgZmFsc2UpO1xuXHRcdH1cblx0fVxuXG5cblx0Ly8gTGF6eSBsb2FkIGluaXRcblx0dmFyIGltYWdlc0xhenlMb2FkID0gbmV3IExhenlMb2FkKHtcblx0ICAgIGVsZW1lbnRzX3NlbGVjdG9yOiBcIi5sYXp5XCIsXG5cdCAgICB0b193ZWJwOiB0cnVlXG5cdH0pO1xuXG5cdHZhciBzaWRlYmFyTGF6eUxvYWQgPSBuZXcgTGF6eUxvYWQoe1xuXHQgICAgZWxlbWVudHNfc2VsZWN0b3I6IFwiLmxhenktc2lkZWJhclwiLFxuXHQgICAgIGNvbnRhaW5lcjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpZGViYXJfX3dyYXBwZXInKSxcblx0ICAgIHRvX3dlYnA6IHRydWVcblx0fSk7XG5cblx0Ly8gY2hlY2sgZm9yIG5ldyBsYXp5IGltYWdlcyBpbiBoaWRkZW4gdGFiIHBhbmVsIFxuXHR2YXIgdGFic19saW5rID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCggJy50YWJzX19saW5rJyApO1xuXG5cdGlmICggdGFic19saW5rICkge1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgdGFic19saW5rLmxlbmd0aDsgaSsrKSB7XG5cdFx0ICAgIHRhYnNfbGlua1tpXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XG5cdFx0ICAgIFx0c2lkZWJhckxhenlMb2FkLnVwZGF0ZSgpO1xuXHRcdCAgICB9LCBmYWxzZSk7XG5cdFx0fVxuXHR9XG5cblxuXHQvLyBTY3JvbGwgYmVoYXZpb3IgZm9yIHRhYnMgY29tcG9uZW50XG5cdHZhciBzY3JvbGwgPSBuZXcgU21vb3RoU2Nyb2xsKCk7XG5cdHZhciB0YWJfbGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY29tcG9uZW50LXRhYnNfX2xpbmsnKTtcblxuXHR2YXIgc2Nyb2xsVGFiID0gZnVuY3Rpb24oKSB7XG5cdFx0dmFyIHRhYl9hbmNob3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjJyArIHRoaXMuZGF0YXNldC5wYXJlbnQpO1xuXG5cdFx0c2V0VGltZW91dChmdW5jdGlvbigpIHsgXG5cdFx0XHRzY3JvbGwuYW5pbWF0ZVNjcm9sbCh0YWJfYW5jaG9yKTtcblx0XHR9LCAyMDApO1xuXHR9O1xuXG5cdGlmICggdGFiX2xpbmtzICkge1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgdGFiX2xpbmtzLmxlbmd0aDsgaSsrKSB7XG5cdFx0ICAgIHRhYl9saW5rc1tpXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNjcm9sbFRhYiwgZmFsc2UpO1xuXHRcdH1cblx0fVxufSk7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=