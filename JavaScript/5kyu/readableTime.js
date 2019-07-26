// Codewars
// 5 kyu - Human Readable Time

/*
Task:
-----
Write a function, which takes a non-negative integer (seconds) as input
and returns the time in a human-readable format (HH:MM:SS)

HH = hours, padded to 2 digits, range: 00 - 99
MM = minutes, padded to 2 digits, range: 00 - 59
SS = seconds, padded to 2 digits, range: 00 - 59
The maximum time never exceeds 359999 (99:59:59)
*/

function humanReadable (seconds) {
  // The maximum time never exceeds 359999 (99:59:59)
  if (seconds < 0 || seconds > 359999) {
    return null
  }
  // Get the hour first
  let hour = Math.floor(seconds / 3600)
  seconds -= hour * 3600
  // Get the minute
  let minute = Math.floor(seconds / 60)
  seconds -= minute * 60
  // Format the hour, minute and seconds to two digits
  let formattedHour = ('0' + hour).slice(-2)
  let formattedMinute = ('0' + minute).slice(-2)
  let formattedSeconds = ('0' + seconds).slice(-2)
  let newTimeDisplay = `${formattedHour}:${formattedMinute}:${formattedSeconds}`
  // Return new time display
  return newTimeDisplay
}

// TEST CASES
console.log(humanReadable(5)) // '00:00:05'
console.log(humanReadable(359999)) // '99:59:59'
