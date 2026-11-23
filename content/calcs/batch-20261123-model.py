"""Drafter model, batch 2026-11-23 (Government Benefits seniors hub + Taxes registered-accounts hub).
Inputs are figures printed on Canada.ca / CRA pages read 2026-11-23 (see each post's Sources)."""
import json, datetime as dt
out = {}
# CPP: apply-by calendar for 2027 start months. Window opens 12 months before the start month (Canada.ca CPP apply page);
# decision within 28 days online / 120 days by mail (CPP after-you-apply page). Target: decision before the 1st of the start month.
pay2027 = ['January 27, 2027','February 24, 2027','March 25, 2027','April 28, 2027','May 27, 2027','June 28, 2027','July 28, 2027','August 27, 2027','September 27, 2027','October 27, 2027','November 26, 2027','December 22, 2027']
f = lambda d: d.strftime('%B %-d, %Y')
rows = []
for m in range(1, 13):
    start = dt.date(2027, m, 1)
    rows.append(dict(start=start.strftime('%B %Y'), opens=dt.date(2026, m, 1).strftime('%B %Y'),
                     online=f(start - dt.timedelta(days=28)), mail=f(start - dt.timedelta(days=120)), firstpay=pay2027[m-1]))
out['cpp_apply_by'] = rows
# OAS: timeline for an example birthday (illustration): born March 14, 1962 -> 64 on March 14, 2026, 65 on March 14, 2027.
b64 = dt.date(2026, 3, 14); b65 = dt.date(2027, 3, 14)
out['oas_timeline'] = dict(letter_check=f(dt.date(2026, 4, 14)), first_month=f(dt.date(2027, 4, 1)), first_pay='April 28, 2027',
                          online_by=f(dt.date(2027, 4, 1) - dt.timedelta(days=14)), mail_by=f(dt.date(2027, 4, 1) - dt.timedelta(days=120)))
# OAS deferral (Canada.ca table, Oct-Dec 2026): 762.50 * (1 + 0.006*months)
out['oas_defer'] = {a: round(762.50 * (1 + 0.006 * 12 * (a - 65)), 2) for a in range(65, 71)}
# OAS retroactive: max 11 months x 762.50
out['oas_retro_max_example'] = round(11 * 762.50, 2)
# GIS: annual max at the Oct-Dec 2026 rate (x12), illustration
out['gis_single_annual'] = round(1138.90 * 12, 2)
out['gis_couple_each_annual'] = round(685.56 * 12, 2)
out['gis_retro_11'] = round(11 * 1138.90, 2)
# RRSP: deadline = 60th day of 2027; 2027 is not a leap year
d60 = dt.date(2027, 1, 1) + dt.timedelta(days=59)
out['rrsp_day60_2027'] = f(d60)
out['rrsp_day60_2026'] = f(dt.date(2026, 1, 1) + dt.timedelta(days=59))
# RRSP: earned income needed to reach the dollar cap (18%)
out['cap_income_2026'] = round(33810 / 0.18, 2)   # 2025 earned income needed for 2026 cap
out['cap_income_2027'] = round(35390 / 0.18, 2)   # 2026 earned income needed for 2027 cap
# new 2027 room by 2026 earned income (no pension adjustment): min(18%, 35,390)
out['room2027'] = {i: min(round(0.18 * i, 2), 35390) for i in (40000, 60000, 80000, 100000, 150000, 200000)}
# example Priya (illustration): 2026 earned income 90,000; PA 6,000; unused room 12,000 -> 2027 limit
out['priya_2027'] = dict(new=min(0.18*90000, 35390), net=min(0.18*90000, 35390) - 6000, limit=12000 + min(0.18*90000, 35390) - 6000)
# over-contribution example: limit 10,000; contributes 15,000 -> excess over limit 5,000; taxable excess (over $2,000 buffer) 3,000; 1%/month = 30
out['overcontrib'] = dict(excess=15000-10000, taxable=15000-10000-2000, per_month=round((15000-10000-2000)*0.01, 2), six_months=round((15000-10000-2000)*0.01*6, 2))
print(json.dumps(out, indent=1))
json.dump(out, open('batch-20261123-model.out.json', 'w'), indent=1)
