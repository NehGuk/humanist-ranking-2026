export default function colorFinalScoreArea(points: number) {
  return points > 6 ? "mt-2 w-full max-w-xl table-fixed text-sm bg-green-800/10" : "mt-2 w-full max-w-xl table-fixed text-sm bg-red-800/10"
}
