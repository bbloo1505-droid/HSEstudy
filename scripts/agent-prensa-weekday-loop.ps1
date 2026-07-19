# Weekday wake for Prensa graduate prep (skips Sat/Sun). Stops after 10 Aug 2026.
$prompt = 'Run the Prensa weekday preparation session for C:\Users\bbloo\hse-launchpad: execute npx tsx scripts/prensa-weekday-session.ts. CRITICAL learner profile: absolute beginner with no prior HSE consulting/hazmat/hygiene understanding — explain in plain English, define jargon, never assume prior knowledge, keep tasks small. If ended=true, stop the loop. If today is weekend, give a short weekend note pointing to the next weekday session only. If weekday, deliver a concise beginner session brief (under 20 lines): title, plain-English focus, closed-book drill, tiny practice task, light reading hint, and which HSE Launchpad lesson to open. Remind: starting from zero is normal; ask instead of pretending; evidence and escalation over sounding clever.'

while ($true) {
  # Poll every 6 hours; only emit on weekdays before/on 10 Aug
  Start-Sleep -Seconds 21600
  $today = Get-Date
  $iso = $today.ToString('yyyy-MM-dd')
  if ($iso -gt '2026-08-10') {
    Write-Output ('AGENT_LOOP_TICK_prensa_weekday {"prompt":"Curriculum complete through start date. Stop the Prensa weekday loop.","ended":true}')
    break
  }
  $dow = [int]$today.DayOfWeek
  if ($dow -ge 1 -and $dow -le 5) {
    $payload = @{ prompt = $prompt; date = $iso } | ConvertTo-Json -Compress
    Write-Output ("AGENT_LOOP_TICK_prensa_weekday " + $payload)
  }
}
