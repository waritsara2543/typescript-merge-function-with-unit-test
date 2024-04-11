interface IMerge {
  merge(
    collection1: number[],
    collection2: number[],
    collection3: number[]
  ): number[];
}

class MergeFunction implements IMerge {
  merge(
    collection1: number[],
    collection2: number[],
    collection3: number[]
  ): number[] {
    const result: number[] = [];
    let i = 0,
      j = collection2.length - 1,
      k = 0;

    while (i < collection1.length && j >= 0 && k < collection3.length) {
      if (
        collection1[i] <= collection3[k] &&
        collection1[i] <= collection2[j]
      ) {
        result.push(collection1[i]);
        i++;
      } else if (
        collection2[j] <= collection3[k] &&
        collection2[j] <= collection1[i]
      ) {
        result.push(collection2[j]);
        j--;
      } else {
        result.push(collection3[k]);
        k++;
      }
    }

    const remaining1 = collection1.slice(i);
    const remaining2 = collection2.slice(0, j + 1).reverse();
    const remaining3 = collection3.slice(k);

    const remaining = this.mergeSortedArrays(remaining1, remaining2);
    const mergedRemaining = this.mergeSortedArrays(remaining, remaining3);

    // Add merged remaining arrays to result
    result.push(...mergedRemaining);

    return result;
  }

  mergeSortedArrays(arr1: number[], arr2: number[]): number[] {
    const merged: number[] = [];
    let i = 0,
      j = 0;

    while (i < arr1.length && j < arr2.length) {
      if (arr1[i] <= arr2[j]) {
        merged.push(arr1[i]);
        i++;
      } else {
        merged.push(arr2[j]);
        j++;
      }
    }

    // Add remaining elements from each array
    merged.push(...arr1.slice(i));
    merged.push(...arr2.slice(j));

    return merged;
  }
}

export default MergeFunction;
