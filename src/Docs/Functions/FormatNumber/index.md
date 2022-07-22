---
title: 格式化数字
---

## 数字千分位，或百分比

```
import React from 'react';
import { useIntl } from '@/umi';
import _ from 'lodash';
import { useCallback } from 'react';
import { FormatNumberOptions } from 'react-intl';

export type UseFormatNumberOptions = {
  /**
   * 用于渲染格式化后的文案
   * @param value
   */
  render?: (value: React.ReactNode) => React.ReactNode;
} & FormatNumberOptions;

/**
 * 格式化数字
 */
export const useFormatNumber = () => {
  const intl = useIntl();

  const formatNumber = useCallback(
    (value: any, options?: UseFormatNumberOptions) => {
      const { render, ...restOptions } = Object.assign(
        {
          render: _.identity,
        },
        options,
      );

      return render(
        _.isNumber(value) ? intl.formatNumber(value, restOptions) : '--',
      );
    },
    [intl],
  );

  const formatRate = useCallback(
    (value: any, options?: UseFormatNumberOptions) => {
      const { render, ...restOptions } = Object.assign(
        {
          render: _.identity,
          maximumFractionDigits: 2,
        },
        options,
      );

      return render(
        _.isNumber(value)
          ? `${intl.formatNumber(value * 100, restOptions)}%`
          : '--',
      );
    },
    [intl],
  );

  return {
    /**
     * 格式化数字千分位分隔
     * @example
     * formatNumber(123456); //123,456
     */
    formatNumber,
    /**
     * 格式化比率
     * @example
     * formatRate(0.1234456) // 12.35%
     */
    formatRate,
  };
};

```
