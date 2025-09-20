document.addEventListener('DOMContentLoaded', function() {
  const buttons = document.querySelectorAll('.btn');

  buttons.forEach(button => {
    button.addEventListener('click', function(event) {
      const clickedId = event.target.id;
      switch (clickedId) {
        case 'ex7':
          window.open('https://jgregorio532625-netizen.github.io/color/', '_blank');
          break;
        case 'ex8':
          window.open('https://jgregorio532625-netizen.github.io/HTML-Portfolio/', '_blank');
          break;
        case 'ex9':
          window.open('https://jgregorio532625-netizen.github.io/ColorNaming/', '_blank');
          break;
        case 'ex10':
          window.open('https://jgregorio532625-netizen.github.io/Exercise10/', '_blank');
          break;
        case 'ex11':
          window.open('https://jgregorio532625-netizen.github.io/Goal1-ex11/', '_blank');
          break;
        case 'ex12':
          window.open('https://jgregorio532625-netizen.github.io/Exercise12/', '_blank');
          break;
        case 'ex13':
          window.open('https://jgregorio532625-netizen.github.io/Exercise13/', '_blank');
          break;
        case 'ex14':
          window.open('https://jgregorio532625-netizen.github.io/Exercise14/', '_blank');
          break;
        case 'ex15':
          window.open('https://jgregorio532625-netizen.github.io/Exercise15/', '_blank');
          break;
      }
    });
  });
});

