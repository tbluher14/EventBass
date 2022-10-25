

export const formatTime = (time) => {
    let timeArr = time?.split(":")
    let hour = timeArr[0]
    let minutes = timeArr[1]
    // let seconds = timeArr[2]
    let amPm = "AM"
    if (hour > 12) {
        hour = hour - 12
        amPm = "PM"
    }
    return `${hour}:${minutes} ${amPm}`
}
