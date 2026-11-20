import { useEffect, useRef, useState, type ChangeEvent, type FormEvent } from 'react';
import { budgets, contactInfo, projectTypes } from '../../data/site';
import { Button } from '../ui/Button';
import { Icon } from '../ui/Icon';
import { SectionHead } from '../ui/SectionHead';
import { Reveal } from '../ui/Reveal';
import { useToast } from '../ui/Toast';

type FieldName = 'name' | 'phone' | 'email' | 'projectType' | 'budget' | 'message';
type Values = Record<FieldName, string>;
type Errors = Partial<Record<FieldName, string>>;
type Status = 'idle' | 'sending' | 'success';

const emptyValues: Values = {
  name: '',
  phone: '',
  email: '',
  projectType: '',
  budget: '',
  message: '',
};

const persianDigits = '۰۱۲۳۴۵۶۷۸۹';
const toLatinDigits = (value: string) => value.replace(/[۰-۹]/g, (char) => String(persianDigits.indexOf(char)));

function validate(values: Values): Errors {
  const errors: Errors = {};

  if (values.name.trim().length < 3) {
    errors.name = 'نام و نام خانوادگی را کامل وارد کنید.';
  }

  const phone = toLatinDigits(values.phone).replace(/[\s-]/g, '');
  if (!/^09\d{9}$/.test(phone)) {
    errors.phone = 'شماره موبایل معتبر نیست. نمونه: 09121234567';
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(values.email.trim())) {
    errors.email = 'ایمیل را درست وارد کنید.';
  }

  if (!values.projectType) {
    errors.projectType = 'نوع پروژه را انتخاب کنید.';
  }

  if (!values.budget) {
    errors.budget = 'بازه بودجه را انتخاب کنید.';
  }

  if (values.message.trim().length < 20) {
    errors.message = 'حداقل ۲۰ کاراکتر درباره پروژه بنویسید.';
  }

  return errors;
}

export function ContactSection() {
  const [values, setValues] = useState<Values>(emptyValues);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>('idle');
  const formRef = useRef<HTMLFormElement>(null);
  const timer = useRef<number | undefined>(undefined);
  const pushToast = useToast();

  useEffect(() => () => window.clearTimeout(timer.current), []);

  const update =
    (field: FieldName) =>
    (event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
      const { value } = event.target;
      setValues((current) => ({ ...current, [field]: value }));
      setErrors((current) => {
        if (!current[field]) return current;
        const next = { ...current };
        delete next[field];
        return next;
      });
    };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);

    const firstInvalid = Object.keys(nextErrors)[0];
    if (firstInvalid) {
      const field = formRef.current?.querySelector<HTMLElement>(`[name="${firstInvalid}"]`);
      field?.focus();
      pushToast('لطفاً فیلدهای مشخص‌شده را بررسی کنید.', 'error');
      return;
    }

    setStatus('sending');
    timer.current = window.setTimeout(() => {
      setStatus('success');
      setValues(emptyValues);
      pushToast('درخواست شما با موفقیت ارسال شد.');
    }, 900);
  };

  return (
    <section className="section" id="contact" aria-labelledby="contact-title">
      <div className="container contact-grid">
        <Reveal>
          <div className="contact-info">
            <SectionHead
              id="contact-title"
              eyebrow="تماس با ما"
              title={
                <>
                  پروژه‌ات را <span className="grad-text">برای ما تعریف کن.</span>
                </>
              }
              lead="فرم را پر کن؛ در کمتر از ۲۴ ساعت کاری با تو تماس می‌گیریم و درباره جزئیات صحبت می‌کنیم."
            />

            <div className="contact-methods">
              <a className="contact-method" href={contactInfo.phoneHref}>
                <span className="contact-method-icon" aria-hidden="true">
                  <Icon name="phone" size={18} />
                </span>
                <span>
                  <span className="contact-method-label">تلفن</span>
                  <span className="contact-method-value contact-method-value--fa">{contactInfo.phone}</span>
                </span>
              </a>
              <a className="contact-method" href={contactInfo.emailHref}>
                <span className="contact-method-icon" aria-hidden="true">
                  <Icon name="mail" size={18} />
                </span>
                <span>
                  <span className="contact-method-label">ایمیل</span>
                  <span className="contact-method-value">{contactInfo.email}</span>
                </span>
              </a>
              <div className="contact-method">
                <span className="contact-method-icon" aria-hidden="true">
                  <Icon name="pin" size={18} />
                </span>
                <span>
                  <span className="contact-method-label">دفتر</span>
                  <span className="contact-method-value contact-method-value--fa">{contactInfo.address}</span>
                </span>
              </div>
            </div>

            <div className="why-note">
              <Icon name="support" size={18} />
              <span>{contactInfo.hours} — پاسخ‌گویی سریع در تلگرام و ایمیل.</span>
            </div>
          </div>
        </Reveal>

        <Reveal delay={120}>
          {status === 'success' ? (
            <div className="form-card glass glass--edge">
              <div className="form-success" role="status">
                <span className="form-success-icon" aria-hidden="true">
                  <Icon name="check" size={30} strokeWidth={2.2} />
                </span>
                <h3>درخواست شما با موفقیت ارسال شد.</h3>
                <p>به‌زودی با شما تماس می‌گیریم. معمولاً در کمتر از ۲۴ ساعت کاری.</p>
                <Button variant="ghost" onClick={() => setStatus('idle')}>
                  ارسال درخواست جدید
                </Button>
              </div>
            </div>
          ) : (
            <form className="form-card glass glass--edge" ref={formRef} onSubmit={handleSubmit} noValidate>
              <div className="form-grid">
                <div className="field">
                  <label htmlFor="name">
                    نام و نام خانوادگی <span aria-hidden="true">*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    className="input"
                    value={values.name}
                    onChange={update('name')}
                    placeholder="مثلاً سارا موسوی"
                    autoComplete="name"
                    aria-invalid={Boolean(errors.name)}
                    aria-describedby={errors.name ? 'name-error' : undefined}
                  />
                  {errors.name ? (
                    <span className="field-error" id="name-error">
                      <Icon name="close" size={12} />
                      {errors.name}
                    </span>
                  ) : null}
                </div>

                <div className="field">
                  <label htmlFor="phone">
                    شماره تماس <span aria-hidden="true">*</span>
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    className="input"
                    value={values.phone}
                    onChange={update('phone')}
                    placeholder="09121234567"
                    inputMode="tel"
                    autoComplete="tel"
                    aria-invalid={Boolean(errors.phone)}
                    aria-describedby={errors.phone ? 'phone-error' : undefined}
                  />
                  {errors.phone ? (
                    <span className="field-error" id="phone-error">
                      <Icon name="close" size={12} />
                      {errors.phone}
                    </span>
                  ) : null}
                </div>

                <div className="field">
                  <label htmlFor="email">
                    ایمیل <span aria-hidden="true">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    className="input"
                    value={values.email}
                    onChange={update('email')}
                    placeholder="you@example.com"
                    autoComplete="email"
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                  />
                  {errors.email ? (
                    <span className="field-error" id="email-error">
                      <Icon name="close" size={12} />
                      {errors.email}
                    </span>
                  ) : null}
                </div>

                <div className="field">
                  <label htmlFor="projectType">
                    نوع پروژه <span aria-hidden="true">*</span>
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    className="select"
                    value={values.projectType}
                    onChange={update('projectType')}
                    aria-invalid={Boolean(errors.projectType)}
                    aria-describedby={errors.projectType ? 'projectType-error' : undefined}
                  >
                    <option value="">انتخاب کنید</option>
                    {projectTypes.map((type) => (
                      <option value={type} key={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                  {errors.projectType ? (
                    <span className="field-error" id="projectType-error">
                      <Icon name="close" size={12} />
                      {errors.projectType}
                    </span>
                  ) : null}
                </div>

                <div className="field field--full">
                  <label htmlFor="budget">
                    بودجه تقریبی <span aria-hidden="true">*</span>
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    className="select"
                    value={values.budget}
                    onChange={update('budget')}
                    aria-invalid={Boolean(errors.budget)}
                    aria-describedby={errors.budget ? 'budget-error' : undefined}
                  >
                    <option value="">انتخاب کنید</option>
                    {budgets.map((budget) => (
                      <option value={budget} key={budget}>
                        {budget}
                      </option>
                    ))}
                  </select>
                  {errors.budget ? (
                    <span className="field-error" id="budget-error">
                      <Icon name="close" size={12} />
                      {errors.budget}
                    </span>
                  ) : null}
                </div>

                <div className="field field--full">
                  <label htmlFor="message">
                    توضیحات پروژه <span aria-hidden="true">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="textarea"
                    value={values.message}
                    onChange={update('message')}
                    placeholder="کمی از کسب‌وکار، مخاطب و هدف پروژه بنویسید…"
                    aria-invalid={Boolean(errors.message)}
                    aria-describedby={errors.message ? 'message-error' : undefined}
                  />
                  {errors.message ? (
                    <span className="field-error" id="message-error">
                      <Icon name="close" size={12} />
                      {errors.message}
                    </span>
                  ) : null}
                </div>
              </div>

              <div className="form-actions">
                <Button type="submit" icon="arrow-left" disabled={status === 'sending'}>
                  {status === 'sending' ? 'در حال ارسال…' : 'ارسال درخواست'}
                </Button>
                <span className="form-note">اطلاعات شما محرمانه می‌ماند و در اختیار شخص سومی قرار نمی‌گیرد.</span>
              </div>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}
