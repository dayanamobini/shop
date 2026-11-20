import { Component, type ErrorInfo, type ReactNode } from 'react';

type Props = { children: ReactNode };
type State = { hasError: boolean };

export class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error('Webeko UI error:', error, info.componentStack);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="container section" role="alert">
          <div className="empty-state">
            <span className="empty-icon" aria-hidden="true">
              !
            </span>
            <h3>مشکلی پیش آمده. لطفاً دوباره تلاش کنید.</h3>
            <p>اگر مشکل ادامه داشت، صفحه را دوباره بارگذاری کنید یا با تیم Webeko تماس بگیرید.</p>
            <button type="button" className="btn btn--primary" onClick={() => window.location.reload()}>
              تلاش دوباره
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
