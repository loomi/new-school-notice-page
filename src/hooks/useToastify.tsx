import { toast, ToastOptions, ToastPromiseParams, ToastContent } from 'react-toastify';
const { success, error, warn, info, promise } = toast;

export type ParamsToastTypes = {
  content: string | ToastContent;
  options?: ToastOptions<any> | undefined;
};

export type ToastDefaultType = (...args: any[]) => any;

export type MethodsToastType<A extends ToastDefaultType> = ({
  content,
  options,
}: ParamsToastTypes) => ReturnType<A>;

export type MethodsPromiseToastType = {
  toastPromisseParams: ToastPromiseParams;
  callback: Promise<unknown> | (() => Promise<unknown>);
  option?: ToastOptions<Record<string, unknown>>;
};

export type OnPromise = ({
  callback,
  toastPromisseParams,
  option,
}: MethodsPromiseToastType) => Promise<unknown>;

export type UseToastfyTypes = {
  onSuccess: MethodsToastType<typeof success>;
  onError: MethodsToastType<typeof error>;
  onWarn: MethodsToastType<typeof warn>;
  onInfo: MethodsToastType<typeof info>;
  onPromise: OnPromise;
};

const theme = 'colored'; //pré-configuraçãos

export const useToastify = (): UseToastfyTypes => {
  const onSuccess = ({ content, options }: ParamsToastTypes) =>
    success(content, { theme, ...options });
  const onError = ({ content, options }: ParamsToastTypes) => error(content, { theme, ...options });
  const onWarn = ({ content, options }: ParamsToastTypes) => warn(content, { theme, ...options });
  const onInfo = ({ content, options }: ParamsToastTypes) => info(content, { theme, ...options });

  const onPromise = ({
    callback,
    toastPromisseParams,
    option,
  }: MethodsPromiseToastType): ReturnType<typeof promise> =>
    promise(callback, toastPromisseParams, {
      theme,
      ...option,
    });

  return {
    onSuccess,
    onError,
    onPromise,
    onWarn,
    onInfo,
  };
};
