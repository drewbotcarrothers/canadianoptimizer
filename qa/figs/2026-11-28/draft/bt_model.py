"""Our own calculation for balance-transfer-vs-consolidation-loan-canada: month-by-month, monthly compounding (APR/12), payment made at month end.
Inputs are labelled examples (not offers)."""
from fractions import Fraction as F
from decimal import Decimal as D, ROUND_HALF_UP
def r2(x): return D(x).quantize(D('0.01'), ROUND_HALF_UP)
def card(bal, apr, pay, promo_months=0, promo_apr=D(0), fee_pct=D(0)):
    """Return months, total_interest, fee, total_paid. Fee added to balance at start."""
    bal = D(bal); fee = r2(bal*fee_pct/100); bal += fee
    interest = D(0); m = 0; paid = D(0)
    while bal > 0 and m < 600:
        a = promo_apr if m < promo_months else apr
        i = bal*a/100/12; interest += i; bal += i
        p = min(pay, bal); bal -= p; paid += p; m += 1
    return m, r2(interest), fee, r2(paid), (r2(bal) if m<600 else None)
def loan_payment(bal, apr, n):
    r = D(apr)/100/12
    return r2(D(bal)*r/(1-(1+r)**(-n)))
def loan(bal, apr, n):
    pay = loan_payment(bal, apr, n); b = D(bal); interest = D(0); r = D(apr)/100/12
    for m in range(n):
        i = b*r; interest += i; b = b + i - pay if m < n-1 else D(0)
    # exact: total paid = pay*n (last pmt adjusts) -> use interest from schedule
    return pay, r2(interest)
if __name__ == '__main__':
    B=8000
    print('stay 20.99 @400', card(B,D('20.99'),D(400)))
    print('BT 0%/10m fee3 then 22.99 @400', card(B,D('22.99'),D(400),10,D(0),D(3)))
    print('BT 0%/12m fee3 @400', card(B,D('22.99'),D(400),12,D(0),D(3)))
    for apr in ('12.99','19.99'):
        for n in (24,36):
            print('loan',apr,n,loan(B,apr,n))
