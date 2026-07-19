# Emits a wake sentinel once per day for the Cursor agent HSE study check-in.
$prompt = 'Run the HSE Launchpad daily study check-in for C:\Users\bbloo\hse-launchpad: execute npx tsx scripts/daily-checkin.ts, then give a concise study brief (under 15 lines) with todays lesson title, session plan, priority official readings, one closed-book recall question, and weak-area focus. If ended=true or today is after 2026-08-09, stop the loop and say the curriculum is complete.'
$payload = @{ prompt = $prompt } | ConvertTo-Json -Compress

while ($true) {
  Start-Sleep -Seconds 86400
  Write-Output ("AGENT_LOOP_TICK_hse_study " + $payload)
}
