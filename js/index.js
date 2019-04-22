(function() {
  var floatingLabel;

  floatingLabel = class floatingLabel {
    constructor(form, options = {}) {
      var event, i, input, j, label, len, len1, ref, ref1;
      if (!form) {
        return;
      }
      options.focusClass || (options.focusClass = "focus");
      options.activeClass || (options.activeClass = "active");
      options.errorClass || (options.errorClass = "error");
      form.classList.add('has-floated-label');
      ref = form.querySelectorAll('label');
      for (i = 0, len = ref.length; i < len; i++) {
        label = ref[i];
        if (!(input = document.querySelector(`#${label.getAttribute('for')}`))) {
          return;
        }
        ref1 = ['keyup', 'input', 'change'];
        for (j = 0, len1 = ref1.length; j < len1; j++) {
          event = ref1[j];
          input.addEventListener(event, function() {
            this.parentNode.classList.remove(options.errorClass);
            return this.parentNode.classList.toggle(options.activeClass, !!this.value);
          });
        }
        input.addEventListener('focus', function() {
          return this.parentNode.classList.add(options.focusClass);
        });
        input.addEventListener('blur', function() {
          return this.parentNode.classList.remove(options.focusClass);
        });
        input.parentNode.classList.toggle(options.activeClass, !!input.value);
      }
    }

  };

  // initialize
  window.floatingLabel = new floatingLabel(document.querySelector('.form'));

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiPGFub255bW91cz4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQSxNQUFBOztFQUFNLGdCQUFOLE1BQUEsY0FBQTtJQUVFLFdBQWEsQ0FBQyxJQUFELEVBQU0sVUFBUSxDQUFBLENBQWQsQ0FBQTtBQUVYLFVBQUEsS0FBQSxFQUFBLENBQUEsRUFBQSxLQUFBLEVBQUEsQ0FBQSxFQUFBLEtBQUEsRUFBQSxHQUFBLEVBQUEsSUFBQSxFQUFBLEdBQUEsRUFBQTtNQUFBLElBQUEsQ0FBYyxJQUFkO0FBQUEsZUFBQTs7TUFFQSxPQUFPLENBQUMsZUFBUixPQUFPLENBQUMsYUFBZTtNQUN2QixPQUFPLENBQUMsZ0JBQVIsT0FBTyxDQUFDLGNBQWdCO01BQ3hCLE9BQU8sQ0FBQyxlQUFSLE9BQU8sQ0FBQyxhQUFlO01BRXZCLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBZixDQUFtQixtQkFBbkI7QUFFQTtNQUFBLEtBQUEscUNBQUE7O1FBQ0UsSUFBQSxDQUFjLENBQUEsS0FBQSxHQUFRLFFBQVEsQ0FBQyxhQUFULENBQXVCLENBQUEsQ0FBQSxDQUFBLENBQUksS0FBSyxDQUFDLFlBQU4sQ0FBbUIsS0FBbkIsQ0FBSixDQUFBLENBQXZCLENBQVIsQ0FBZDtBQUFBLGlCQUFBOztBQUVBO1FBQUEsS0FBQSx3Q0FBQTs7VUFDRSxLQUFLLENBQUMsZ0JBQU4sQ0FBdUIsS0FBdkIsRUFBOEIsUUFBQSxDQUFBLENBQUE7WUFDNUIsSUFBQyxDQUFBLFVBQVUsQ0FBQyxTQUFTLENBQUMsTUFBdEIsQ0FBNkIsT0FBTyxDQUFDLFVBQXJDO21CQUNBLElBQUMsQ0FBQSxVQUFVLENBQUMsU0FBUyxDQUFDLE1BQXRCLENBQTZCLE9BQU8sQ0FBQyxXQUFyQyxFQUFrRCxDQUFDLENBQUMsSUFBQyxDQUFBLEtBQXJEO1VBRjRCLENBQTlCO1FBREY7UUFJQSxLQUFLLENBQUMsZ0JBQU4sQ0FBdUIsT0FBdkIsRUFBZ0MsUUFBQSxDQUFBLENBQUE7aUJBQzlCLElBQUMsQ0FBQSxVQUFVLENBQUMsU0FBUyxDQUFDLEdBQXRCLENBQTBCLE9BQU8sQ0FBQyxVQUFsQztRQUQ4QixDQUFoQztRQUVBLEtBQUssQ0FBQyxnQkFBTixDQUF1QixNQUF2QixFQUErQixRQUFBLENBQUEsQ0FBQTtpQkFDN0IsSUFBQyxDQUFBLFVBQVUsQ0FBQyxTQUFTLENBQUMsTUFBdEIsQ0FBNkIsT0FBTyxDQUFDLFVBQXJDO1FBRDZCLENBQS9CO1FBRUEsS0FBSyxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsTUFBM0IsQ0FBa0MsT0FBTyxDQUFDLFdBQTFDLEVBQXVELENBQUMsQ0FBQyxLQUFLLENBQUMsS0FBL0Q7TUFYRjtJQVZXOztFQUZmLEVBQUE7OztFQTJCQSxNQUFNLENBQUMsYUFBUCxHQUF1QixJQUFJLGFBQUosQ0FBa0IsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsT0FBdkIsQ0FBbEI7QUEzQnZCIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgZmxvYXRpbmdMYWJlbFxuICBcbiAgY29uc3RydWN0b3I6IChmb3JtLG9wdGlvbnM9e30pIC0+XG4gICAgXG4gICAgcmV0dXJuIHVubGVzcyBmb3JtXG4gICAgXG4gICAgb3B0aW9ucy5mb2N1c0NsYXNzIHx8PSBcImZvY3VzXCJcbiAgICBvcHRpb25zLmFjdGl2ZUNsYXNzIHx8PSBcImFjdGl2ZVwiXG4gICAgb3B0aW9ucy5lcnJvckNsYXNzIHx8PSBcImVycm9yXCJcbiAgICBcbiAgICBmb3JtLmNsYXNzTGlzdC5hZGQgJ2hhcy1mbG9hdGVkLWxhYmVsJ1xuICAgIFxuICAgIGZvciBsYWJlbCBpbiBmb3JtLnF1ZXJ5U2VsZWN0b3JBbGwoJ2xhYmVsJylcbiAgICAgIHJldHVybiB1bmxlc3MgaW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiIyN7bGFiZWwuZ2V0QXR0cmlidXRlKCdmb3InKX1cIilcbiAgICAgICAgICAgICAgICAgIFxuICAgICAgZm9yIGV2ZW50IGluIFsna2V5dXAnLCdpbnB1dCcsICdjaGFuZ2UnXVxuICAgICAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyIGV2ZW50LCAtPlxuICAgICAgICAgIEBwYXJlbnROb2RlLmNsYXNzTGlzdC5yZW1vdmUgb3B0aW9ucy5lcnJvckNsYXNzXG4gICAgICAgICAgQHBhcmVudE5vZGUuY2xhc3NMaXN0LnRvZ2dsZSBvcHRpb25zLmFjdGl2ZUNsYXNzLCAhIUB2YWx1ZVxuICAgICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lciAnZm9jdXMnLCAtPlxuICAgICAgICBAcGFyZW50Tm9kZS5jbGFzc0xpc3QuYWRkIG9wdGlvbnMuZm9jdXNDbGFzc1xuICAgICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lciAnYmx1cicsIC0+XG4gICAgICAgIEBwYXJlbnROb2RlLmNsYXNzTGlzdC5yZW1vdmUgb3B0aW9ucy5mb2N1c0NsYXNzXG4gICAgICBpbnB1dC5wYXJlbnROb2RlLmNsYXNzTGlzdC50b2dnbGUgb3B0aW9ucy5hY3RpdmVDbGFzcywgISFpbnB1dC52YWx1ZVxuXG4jIGluaXRpYWxpemVcbiAgICBcbndpbmRvdy5mbG9hdGluZ0xhYmVsID0gbmV3IGZsb2F0aW5nTGFiZWwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcm0nKSJdfQ==
//# sourceURL=coffeescript