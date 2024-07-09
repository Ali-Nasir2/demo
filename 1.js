document.addEventListener('DOMContentLoaded', function() {
  const activitySlider = document.getElementById('activities-slider');
  const timeSlider = document.getElementById('time-slider');
  const activityValue = document.getElementById('activities-value');
  const timeValue = document.getElementById('time-value');
  const savingsValue = document.getElementById('savings-value');
  const hoursSavedValue = document.getElementById('hours-saved-value');

  function updateSliderTrack(slider) {
    const percentage = ((slider.value - slider.min) / (slider.max - slider.min)) * 100;
    slider.style.background = `linear-gradient(to right, #888 ${percentage}%, #d3d3d3 ${percentage}%)`;
  }

  function formatNumberWithCommas(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  function updateActivityValue() {
    activityValue.textContent = activitySlider.value;
    updateSavings(); // Ensure savings are updated when activity value changes
  }

  function updateTimeValue() {
    timeValue.textContent = `$${formatNumberWithCommas(timeSlider.value)}`;
    updateSavings(); // Ensure savings are updated when time value changes
  }

  function updateSavings() {
    const activities = parseInt(activitySlider.value, 10);
    const timeVal = parseInt(timeSlider.value, 10);
    const savings = activities * timeVal * 8 * 20;
    const hoursSaved = activities * timeVal;
    savingsValue.textContent = `$${formatNumberWithCommas(savings)}`;
    hoursSavedValue.textContent = `${hoursSaved}`;
  }

  activitySlider.addEventListener('input', function() {
    updateSliderTrack(activitySlider);
    updateActivityValue();
  });

  timeSlider.addEventListener('input', function() {
    updateSliderTrack(timeSlider);
    updateTimeValue();
  });

  // Initialize the slider track color, values, and savings
  updateSliderTrack(activitySlider);
  updateSliderTrack(timeSlider);
  updateActivityValue();
  updateTimeValue();
  updateSavings();
});
