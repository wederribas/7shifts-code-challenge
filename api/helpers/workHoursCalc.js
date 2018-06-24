function calculateWorkedHours(location, punches) {
  const workedHours = [];

  punches.map(punch => {
    const clockedIn = new Date(punch["clockedIn"]);
    const clockedOut = new Date(punch["clockedOut"]);
    const totalDayHours = ((clockedOut - clockedIn) / (1000 * 60 * 60)).toFixed(
      2
    );

    workedHours.push({
      userId: punch["userId"],
      locationId: location.id,
      totalDayHours: totalDayHours
    });
  });

  return workedHours;
}

module.exports = calculateWorkedHours;
