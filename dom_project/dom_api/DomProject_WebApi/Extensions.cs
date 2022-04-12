using DomProject_WebApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;

namespace DomProject_WebApi
{
    /// <summary>
    /// Define métodos de extensão para auxílio no cálculo.
    /// </summary>
    public static class Extensions
    {

        public static void SetTraceValues(this Traceable traceable)
        {
            traceable.LastWriteDate = DateTime.Now;

            if (!traceable.CreationDate.HasValue)
                traceable.CreationDate = traceable.LastWriteDate;
        }

        public static void SetUpdateValues(this Traceable traceable)
        {
            traceable.LastWriteDate = DateTime.Now;
        }
    
        /// <summary>
        /// Obtém o objeto <typeparamref name="T"/> que possui o valor máximo de <typeparamref name="M"/>.
        /// </summary>
        /// <typeparam name="T">O objeto buscado.</typeparam>
        /// <typeparam name="M">O objeto <see cref="IComparable"/>.</typeparam>
        /// <param name="source">A fonte de dados.</param>
        /// <param name="selector">O selector do valor máximo.</param>
        /// <returns>O objeto <typeparamref name="T"/> cujo valor de <typeparamref name="M"/> é o máximo.</returns>
        public static T MaxBy<T, M>(this IEnumerable<T> source, Func<T, M> selector)
            where M : IComparable
        {
            return source.Select(x => (x, selector(x))).Aggregate((x, y) => Comparer<M>.Default.Compare(y.Item2, x.Item2) > 0 ? y : x).x;
        }

        /// <summary>
        /// Obtém o objeto <typeparamref name="T"/> que possui o valor mínimo de <typeparamref name="M"/>.
        /// </summary>
        /// <typeparam name="T">O objeto buscado.</typeparam>
        /// <typeparam name="M">O objeto <see cref="IComparable"/>.</typeparam>
        /// <param name="source">A fonte de dados.</param>
        /// <param name="selector">O selector do valor mínimo.</param>
        /// <returns>O objeto <typeparamref name="T"/> cujo valor de <typeparamref name="M"/> é o mínimo.</returns>
        public static T MinBy<T, M>(this IEnumerable<T> source, Func<T, M> selector)
            where M : IComparable
        {
            return source.Select(x => (x, selector(x))).Aggregate((x, y) => Comparer<M>.Default.Compare(y.Item2, x.Item2) < 0 ? y : x).x;
        }

        /// <summary>
        /// Verifica se duas datas possuem o mesmo mês do mesmo ano.
        /// </summary>
        /// <param name="left">A primeira data a comparar.</param>
        /// <param name="right">A segunda data a comparar.</param>
        /// <returns>Retorna <see langword="true"/> se as datas possuírem o mesmo mês do mesmo ano; caso contrário, <see langword="false"/>.</returns>
        public static bool HasSameMonthOf(this DateTime left, DateTime right)
        {
            return left.Month == right.Month && left.Year == right.Year;
        }
    }
}
